/*
 * Copyright 2019 Google LLC
 *
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
#ifndef GrGLAssembleHelpers_DEFINED
#define GrGLAssembleHelpers_DEFINED

#include "include/gpu/ganesh/gl/GrGLAssembleInterface.h"
#include "include/gpu/ganesh/gl/GrGLFunctions.h"
#include "include/gpu/ganesh/gl/GrGLTypes.h"

void GrGetEGLQueryAndDisplay(GrEGLQueryStringFn** queryString, GrEGLDisplay* display,
                             void* ctx, GrGLGetProc get);

#endif  // GrGLAssembleHelpers_DEFINED
