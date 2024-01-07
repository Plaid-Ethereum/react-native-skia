package com.shopify.reactnative.skia;

import android.content.Context;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.util.Log;
import android.view.MotionEvent;

import com.facebook.react.views.view.ReactViewGroup;

public abstract class SkiaBaseView extends ReactViewGroup implements SurfaceHolder.Callback {
    private SurfaceView mSurfaceView;

    private String tag = "SkiaView";

    public SkiaBaseView(Context context) {
        super(context);
        mSurfaceView = new SurfaceView(context);
        mSurfaceView.getHolder().addCallback(this);
        mSurfaceView.setZOrderOnTop(true); // Necessary to make the surface view transparent
        addView(mSurfaceView);
    }

    public void destroySurface() {
        Log.i(tag, "destroySurface");
        surfaceDestroyed();
    }

    @Override
    protected void onLayout(boolean changed, int left, int top, int right, int bottom) {
        Log.i(tag, "onLayout " + this.getMeasuredWidth() + "/" + this.getMeasuredHeight());
        super.onLayout(changed, left, top, right, bottom);
        mSurfaceView.layout(0, 0, this.getMeasuredWidth(), this.getMeasuredHeight());
    }

    @Override
    public void surfaceCreated(SurfaceHolder holder) {
        Log.i(tag, "surfaceCreated");
        if (holder.getSurface() == null) {
            Log.i(tag, "getSurface()");
        }
        surfaceAvailable(holder.getSurface(), this.getMeasuredWidth(), this.getMeasuredHeight());
    }

    @Override
    public void surfaceChanged(SurfaceHolder holder, int format, int width, int height) {
        Log.i(tag, "surfaceChanged " + width + "/" + height);
        surfaceSizeChanged(width, height);
    }

    @Override
    public void surfaceDestroyed(SurfaceHolder holder) {
        Log.i(tag, "surfaceDestroyed");
        destroySurface();
        // Additional clean-up as necessary
    }

    @Override
    public boolean onTouchEvent(MotionEvent ev) {
        // https://developer.android.com/training/gestures/multi
        int action = ev.getActionMasked();

        MotionEvent.PointerCoords r = new MotionEvent.PointerCoords();

        double[] points;

        // If this is a pointer_up/down event we need to handle it a bit specialized
        switch (action) {
            case MotionEvent.ACTION_POINTER_DOWN:
            case MotionEvent.ACTION_POINTER_UP: {
                points = new double[5];
                int pointerIndex = ev.getActionIndex();
                ev.getPointerCoords(pointerIndex, r);
                points[0] = r.x;
                points[1] = r.y;
                points[2] = ev.getPressure(pointerIndex);
                points[3] = motionActionToType(action);
                points[4] = ev.getPointerId(pointerIndex);

                updateTouchPoints(points);

                break;
            }
            default: {
                // For the rest we can just handle it like expected
                int count = ev.getPointerCount();
                int pointerIndex = 0;
                points = new double[5 * count];
                for (int i = 0; i < count; i++) {
                    ev.getPointerCoords(i, r);
                    points[pointerIndex++] = r.x;
                    points[pointerIndex++] = r.y;
                    points[pointerIndex++] = ev.getPressure(i);
                    points[pointerIndex++] = motionActionToType(action);
                    points[pointerIndex++] = ev.getPointerId(i);
                }

                updateTouchPoints(points);

                break;
            }
        }

        return true;
    }

    private static int motionActionToType(int action) {
        int actionType = 3;
        switch (action) {
            case MotionEvent.ACTION_DOWN:
            case MotionEvent.ACTION_POINTER_DOWN:
                actionType = 0;
                break;
            case MotionEvent.ACTION_MOVE:
                actionType = 1;
                break;
            case MotionEvent.ACTION_UP:
            case MotionEvent.ACTION_POINTER_UP:
                actionType = 2;
                break;
            case MotionEvent.ACTION_CANCEL:
                actionType = 3;
                break;
        }
        return actionType;
    }

    protected abstract void surfaceAvailable(Object surface, int width, int height);

    protected abstract void surfaceSizeChanged(int width, int height);

    protected abstract void surfaceDestroyed();

    protected abstract void setMode(String mode);

    protected abstract void setDebugMode(boolean show);

    protected abstract void updateTouchPoints(double[] points);

    protected abstract void registerView(int nativeId);

    protected abstract void unregisterView();
}