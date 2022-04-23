define({"1239":{i:0.000139902990842997,u:"../Content/Reference Material/S/SAVGOL.htm",a:"The SAVGOL function returns the coefficients of a Savitzky-Golay smoothing filter, which can then be applied using the CONVOL function. The Savitzky-Golay smoothing filter, also known as least squares or DISPO (digital smoothing polynomial), can be used to smooth a noisy signal. The filter is ...",t:"SAVGOL "},"1240":{i:0.000498917877278169,u:"../Content/Reference Material/S/SCALE3_Procedure.htm",a:"The SCALE3 procedure sets up transformation and scaling parameters for basic 3-D viewing. This procedure is similar to SURFR and SCALE3D, except that the data ranges must be specified and the scaling does not vary with rotation. Results are stored in the system variables !P.T, !X.S, !Y.S, and !Z.S. ...",t:"SCALE3 Procedure"},"1241":{i:0.000342719882199914,u:"../Content/Reference Material/S/SCALE3D_Procedure.htm",a:"The SCALE3D procedure scales the 3-D unit cube (a cube with the length of each side equal to 1) into the viewing area. Eight data points are created at the vertices of the 3-D unit cube. The vertices are then transformed by the value of the system variable !P.T. The system is translated to bring the ...",t:"SCALE3D Procedure"},"1242":{i:0.000128976770404926,u:"../Content/Reference Material/S/SCATTERPLOT.htm",a:"The SCATTERPLOT function displays data as a collection of points, plotted using two-dimensional Cartesian coordinates. Example The following lines create the plot shown above.  ; Specify the file to use for the plot. testFile = FILEPATH(\u0027ScatterplotData.csv\u0027, $ SUBDIRECTORY = [\u0027examples\u0027, \u0027data\u0027])  ...",t:"SCATTERPLOT"},"1243":{i:0.000118711139155375,u:"../Content/Reference Material/S/SCATTERPLOT3D.htm",a:"The SCATTERPLOT3D function displays data as a collection of points, plotted using three-dimensional Cartesian coordinates. Example Follow this example to create the plot shown above. ; Specify the file to use for the plot. testFile = FILEPATH(\u0027ScatterplotData.csv\u0027, $ SUBDIRECTORY = [\u0027examples\u0027, ...",t:"SCATTERPLOT3D"},"1244":{i:0.000423752088336537,u:"../Content/Reference Material/S/SCOPE_LEVEL.htm",a:"The SCOPE_LEVEL function returns the scope level of the currently running procedure or function. For more information, see Interpreter Frames, Level, and Variable Scope . Syntax Result = SCOPE_LEVEL() Return Value Returns an integer specifying the level of the currently running procedure or ...",t:"SCOPE_LEVEL"},"1245":{i:0.000495792381681064,u:"../Content/Reference Material/S/SCOPE_TRACEBACK.htm",a:"The SCOPE_TRACEBACK function is used to obtain an array containing the current interpreter call stack, which is a list describing the sequence of routine calls that have brought IDL execution to the current point. Each element of the array describes the routine as well as the source file and line ...",t:"SCOPE_TRACEBACK"},"1246":{i:0.0017832578988865,u:"../Content/Reference Material/S/SCOPE_VARFETCH.htm",a:"The SCOPE_VARFETCH function returns variables outside the local scope of the currently running procedure or function. You can use it to examine or alter variables that are not otherwise visible, or to create new variables in other scopes. In normal IDL operation, routines are not allowed to see ...",t:"SCOPE_VARFETCH"},"1247":{i:0.000495792381681064,u:"../Content/Reference Material/S/SCOPE_VARNAME.htm",a:"The SCOPE_VARNAME function returns the names of variables outside the local scope of the currently running procedure or function. Given a variable within the local scope of the currently running routine, SCOPE_VARNAME can supply the name under which it is known in an earlier routine in the current ...",t:"SCOPE_VARNAME"},"1248":{i:0.000449305780652665,u:"../Content/Reference Material/S/SEARCH2D.htm",a:"The SEARCH2D function finds “objects” or regions of similar data values within a two-dimensional array. Given a starting location and a range of values to search for, SEARCH2D finds all the cells within the array that are within the specified range and have some path of connectivity through these ...",t:"≥SEARCH2D "},"1249":{i:0.000429204239329315,u:"../Content/Reference Material/S/SEARCH3D.htm",a:"The SEARCH3D function finds “objects” or regions of similar data values within a 3-D array of data. Given a starting location and a range of values to search for, SEARCH3D finds all the cells within the volume that are within the specified range of values and have some path of connectivity through ...",t:"SEARCH3D "},"1250":{i:0.00031405161037027,u:"../Content/Reference Material/S/SEM_CREATE.htm",a:"A semaphore is a software mechanism used to provide synchronization between multiple processes or between different threads of a single process. Often, semaphores are used to protect or restrict access to shared or key resources, such as shared memory segments. The SEM_CREATE function creates a ...",t:"SEM_CREATE"},"1251":{i:0.000244715305983166,u:"../Content/Reference Material/S/SEM_DELETE.htm",a:"The SEM_DELETE procedure destroys the reference to the specified semaphore within the current IDL process. (Semaphores themselves are independent of any IDL process.) SEM_DELETE behaves differently on UNIX and Windows systems: UNIX Systems On UNIX systems, a semaphore can exist even if no process ...",t:"SEM_DELETE"},"1252":{i:0.000244715305983166,u:"../Content/Reference Material/S/SEM_LOCK.htm",a:"The SEM_LOCK function attempts to gain the lock on an existing semaphore for the current IDL process. (Note that the semaphore could have been created by any process; IDL can lock semaphores created by other applications.) Once the lock has been obtained by an IDL process, other processes (including ...",t:"SEM_LOCK"},"1253":{i:0.000244715305983166,u:"../Content/Reference Material/S/SEM_RELEASE.htm",a:"The SEM_RELEASE procedure releases the lock on the specified semaphore held by the current IDL process. If the current IDL process does not own the lock on the specified semaphore, this routine returns quietly. Example See SEM_LOCK for an example using this function. Syntax SEM_RELEASE, strName ...",t:"SEM_RELEASE"},"1254":{i:0.000781920723773002,u:"../Content/Reference Material/S/SET_PLOT_Procedure.htm",a:"The SET_PLOT procedure sets the output device used by the IDL Direct Graphics procedures. Keyword parameters control how the color tables are transferred to the newly selected graphics device. SET_PLOT performs the following actions: It sets the read-only system variable !D to reflect the ...",t:"SET_PLOT Procedure"},"1255":{i:0.000174500694354678,u:"../Content/Reference Material/S/SET_SHADING_Procedure.htm",a:"The SET_SHADING procedure modifies the light source shading parameters that affect the output of SHADE_SURF and POLYSHADE. Parameters can be changed to control the light-source direction, shading method, and the rejection of hidden surfaces. SET_SHADING first resets the shading parameters to their ...",t:"SET_SHADING Procedure"},"1256":{i:0.000335944831263739,u:"../Content/Reference Material/S/SETENV.htm",a:"The SETENV procedure adds or changes an environment string in the process environment. Examples Change the current shell variable by entering: SETENV,\u0027SHELL=/bin/sh\u0027 Make sure to eliminate any whitespace around the equal sign: ; This is an incorrect usage--there are spaces around the equal ; sign: ...",t:"SETENV "},"1257":{i:0.000531904921568786,u:"../Content/Reference Material/S/SFIT.htm",a:"The SFIT function determines a polynomial fit to a surface and returns a fitted array. The function fitted is: This routine is written in the IDL language. Its source code can be found in the file sfit.pro in the lib subdirectory of the IDL distribution. Examples ; Create a grid from zero to six ...",t:"SFIT "},"1258":{i:0.000352690880939556,u:"../Content/Reference Material/S/SHADE_SURF_Procedure.htm",a:"The SHADE_SURF procedure creates a shaded-surface representation of a regular or nearly-regular gridded surface with shading from either a light source model or from a user-specified array of intensities. Displays are easily constructed depicting the surface elevation of a variable shaded as a ...",t:"SHADE_SURF Procedure"},"1259":{i:7.92789114366781E-05,u:"../Content/Reference Material/S/SHADE_SURF_IRR_Procedure.htm",a:"The SHADE_SURF_IRR procedure creates a shaded surface representation of an irregularly gridded elevation dataset. The data must be representable as an array of quadrilaterals. This routine should be used when the ( X, Y, Z ) arrays are too irregular to be drawn by SHADE_SURF, but are still ...",t:"SHADE_SURF_IRR Procedure"},"1260":{i:0.00018856320191219,u:"../Content/Reference Material/S/SHADE_VOLUME_Procedure.htm",a:"Given a 3-D volume and a contour value, SHADE_VOLUME produces a list of vertices and polygons describing the contour surface. The polygons are described by a (3, n ) array of vertices and a polygon list array that contains the vertices belonging to each polygon. Given a volume array with dimensions ...",t:"SHADE_VOLUME Procedure"},"1261":{i:0.000320410568064252,u:"../Content/Reference Material/S/SHIFT.htm",a:"The SHIFT function shifts elements of vectors or arrays along any dimension by any number of elements. Positive shifts are to the right while left shifts are expressed as a negative number. All shifts are circular. Elements shifted off one end wrap around and are shifted onto the other end. In the ...",t:"SHIFT "},"1262":{i:0.000365350433114042,u:"../Content/Reference Material/S/SHIFT_DIFF.htm",a:"The SHIFT_DIFF function applies a shift-difference filter to an image array to generate an array containing differences representing edges in the image. Examples This example produces an image with black gradients on the left and white gradients on the right. TVSCL, SHIFT_DIFF(DIST(200), ...",t:"SHIFT_DIFF"},"1263":{i:0.000482810601491291,u:"../Content/Reference Material/S/SHMDEBUG.htm",a:"The SHMDEBUG function enables a debugging mode in which IDL prints an informational message (including a traceback) every time a variable created with the SHMVAR function loses its reference to the underlying memory segment created by. There are many reasons why a such a variable might lose its ...",t:"SHMDEBUG "},"1264":{i:0.000877567784038693,u:"../Content/Reference Material/S/SHMMAP.htm",a:"The SHMMAP procedure maps anonymous shared memory, or local disk files, into the memory address space of the currently executing IDL process. Mapped memory segments are associated with an IDL array specified by the user as part of the call to SHMMAP. The type and dimensions of the specified array ...",t:"SHMMAP "},"1265":{i:0.000456205306485786,u:"../Content/Reference Material/S/SHMUNMAP.htm",a:"The SHMUNMAP procedure is used to remove a memory segment previously created by SHMMAP from the IDL session. In addition, it may remove the memory segment from the system. (Whether the memory segment is removed from the system depends on the type of segment, and on the arguments used with SHMMAP ...",t:"SHMUNMAP"},"1266":{i:0.000639198234515494,u:"../Content/Reference Material/S/SHMVAR.htm",a:"The SHMVAR function creates an IDL array variable that uses the memory from a current mapped memory segment created by the SHMMAP procedure. Variables created by SHMVAR are used in much the same way as any other IDL variable, and provide the IDL user with the ability to alter the contents of ...",t:"SHMVAR "},"1267":{i:0.000102212686992234,u:"../Content/Reference Material/S/SHOW3_Procedure.htm",a:"The SHOW3 procedure combines an image, a surface plot of the image data, and a contour plot of the images data in a single tri-level display. This routine is written in the IDL language. Its source code can be found in the file show3.pro in the lib subdirectory of the IDL distribution. Syntax SHOW3, ...",t:"SHOW3 Procedure"},"1268":{i:0.000363541092739996,u:"../Content/Reference Material/S/SHOWFONT.htm",a:"The SHOWFONT procedure displays a TrueType or vector-drawn font (from the file hersh1.chr , located in the resource/fonts subdirectory of the IDL distribution) on the current graphics device. This routine is written in the IDL language. Its source code can be found in the file showfont.pro in the ...",t:"SHOWFONT"},"1269":{i:5.62801968129645E-05,u:"../Content/Reference Material/S/SIGNUM.htm",a:"The SIGNUM function returns the sign of each element of an array. The sign of a value X is defined as: 1 if X \u003e 0 0 if X = 0 -1 if X \u003c 0 If X is complex then the sign is defined as X/abs(X) . If X is NaN (not-a-number) then the result is also NaN . Examples Find the sign of each element in an array: ...",t:"SIGNUM"},"1270":{i:0.000286936612117367,u:"../Content/Reference Material/S/SIMPLEX.htm",a:"The SIMPLEX function uses the simplex method to solve linear programming problems. Given a set of N independent variables X i , where i = 0, ..., N , the simplex method seeks to maximize the following function, with the assumption that X i ≥ 0. The X i are further constrained by the following ...",t:"SIMPLEX "},"1271":{i:0.000341732211517856,u:"../Content/Reference Material/S/SIN.htm",a:"The periodic function SIN returns the trigonometric sine of X. Examples To find the sine of 0.5 radians and print the result, enter: PRINT, SIN(0.5) The following example plots the SIN function between 0 and 2π with 100 intervals: X = 2*!PI/100 * FINDGEN(100) PLOT, X, SIN(X) !PI is a read-only ...",t:"SIN "},"1272":{i:7.41112348156038E-05,u:"../Content/Reference Material/S/SINDGEN.htm",a:"The SINDGEN function returns a string array with the specified dimensions. Each element of the array is set to the string representation of the value of its one-dimensional subscript, using IDL’s default formatting rules. For example, S=SINDGEN(5) will create a 5-element string array with the values ...",t:"SINDGEN"},"1273":{i:0.000228960706424806,u:"../Content/Reference Material/S/SINH.htm",a:"The SINH function returns the hyperbolic sine of X. Examples To find the hyperbolic sine of each element in the array [.5, .2, .4] and print the result, enter: PRINT, SINH([.5, .2, .4]) To plot the SINH function between 0 and 2π with 100 intervals, enter: X = 2*!PI/100 * FINDGEN(100) PLOT, X, ...",t:"SINH "},"1274":{i:0.00190306147937,u:"../Content/Reference Material/S/SIZE.htm",a:"The SIZE function returns size and type information for its argument if no keywords are set. If a keyword is set, SIZE returns the specified quantity. Examples Print the size information for a 10 by 20 floating-point array by entering: PRINT, SIZE(FINDGEN(10, 20)) IDL prints: 2   10   20   4   200 ...",t:"SIZE "},"1275":{i:0.000357433692525937,u:"../Content/Reference Material/S/SKEWNESS.htm",a:"The SKEWNESS function computes the statistical skewness of an n -element vector. Skewness determines whether a distribution is symmetric about its maximum. Positive skewness indicates the distribution is skewed to the right, with a longer tail to the right of the distribution maximum. Negative ...",t:"SKEWNESS "},"1276":{i:7.94526638610268E-05,u:"../Content/Reference Material/S/SKIP_LUN.htm",a:"The SKIP_LUN procedure reads data in an open file and moves the file pointer. It is useful in situations where it is necessary to skip over a known amount of data in a file without the requirement of having the data available in an IDL variable. SKIP_LUN can skip over a fixed amount of data, ...",t:"SKIP_LUN "},"1277":{i:6.72761725286328E-05,u:"../Content/Reference Material/S/SLICER3.htm",a:"The IDL SLICER3 is a widget-based application to visualize three-dimensional datasets. This program supersedes the SLICER program. This routine is written in the IDL language. Its source code can be found in the file slicer3.pro in the lib subdirectory of the IDL distribution. Syntax SLICER3 [, ...",t:"SLICER3 "},"1278":{i:0.000138377315121485,u:"../Content/Reference Material/S/SLIDE_IMAGE_Procedure.htm",a:"The SLIDE_IMAGE procedure creates a scrolling graphics window for examining large images. By default, 2 draw widgets are used. The draw widget on the left shows a reduced version of the complete image, while the draw widget on the right displays the actual image with scrollbars that allow sliding ...",t:"SLIDE_IMAGE Procedure"},"1279":{i:0.000593510843649857,u:"../Content/Reference Material/S/SMOOTH.htm",a:"The SMOOTH function returns a copy of Array smoothed with a boxcar average of the specified width. The result has the same type and dimensions as Array . The algorithm used by SMOOTH is: where N is the number of elements in A. Examples The following example smoothes a dataset in two different ways. ...",t:"SMOOTH "},"1280":{i:0.000388682169811535,u:"../Content/Reference Material/S/SOBEL.htm",a:"The SOBEL function returns an approximation to the Sobel edge enhancement operator for images, where ( j , k ) are the coordinates of each pixel F jk in the Image . This is equivalent to a convolution using the following masks: All of the edge points in the result are set to zero. Examples If the ...",t:"SOBEL "},"1281":{i:0.000418672158115587,u:"../Content/Reference Material/S/SOCKET.htm",a:"The SOCKET procedure opens a client-side TCP/IP Internet socket as an IDL file unit. Such files can be used in the standard manner with any of IDL’s Input/Output routines. Avoid using the EOF procedure as a way to check to see if a socket is empty. Instead, structure your communication across the ...",t:"SOCKET "},"1282":{i:0.000372642815880576,u:"../Content/Reference Material/S/SORT.htm",a:"The SORT function returns a vector of subscripts that allow access to the elements of Array in ascending order. Examples Example 1 A = [4, 3, 7, 1, 2] PRINT, \u0027SORT(A) = \u0027, SORT(A) ; Display the elements of A in sorted order: PRINT, \u0027Elements of A in sorted order: \u0027, A[SORT(A)] ; Display the elements ...",t:"SORT "},"1283":{i:0.00034727966443204,u:"../Content/Reference Material/S/SPAWN.htm",a:"The SPAWN procedure spawns a child process to execute a command or series of commands. The result of calling SPAWN depends on the platform on which it is being used: Under UNIX, the shell used (if any) is obtained from the SHELL environment variable. The NOSHELL keyword can be used to execute a ...",t:"SPAWN "},"1284":{i:0.000454645102905208,u:"../Content/Reference Material/S/SPH_4PNT.htm",a:"Given four 3-dimensional points, the SPH_4PNT procedure returns the center and radius necessary to define the unique sphere passing through those points. This routine is written in the IDL language. Its source code can be found in the file sph_4pnt.pro in the lib subdirectory of the IDL ...",t:"SPH_4PNT "},"1285":{i:0.00044417486769458,u:"../Content/Reference Material/S/SPH_SCAT.htm",a:"The SPH_SCAT function performs spherical gridding. Scattered samples on the surface of a sphere are interpolated to a regular grid. This routine is a convenient interface to the spherical gridding and interpolation provided by TRIANGULATE and TRIGRID. This routine is written in the IDL language. Its ...",t:"SPH_SCAT "},"1286":{i:0.000368202697321914,u:"../Content/Reference Material/S/SPHER_HARM.htm",a:"The SPHER_HARM function returns the value of the spherical harmonic Y lm (θ,φ), - l ≤ m ≤ l , l ≥ 0, which is a function of two coordinates on a spherical surface. The spherical harmonics are related to the associated Legendre polynomial by: For negative m the following relation is used: where * ...",t:"SPHER_HARM "},"1287":{i:0.000544032198502538,u:"../Content/Reference Material/S/SPL_INIT.htm",a:"The SPL_INIT function is called to establish the type of interpolating spline for a tabulated set of functional values X i , Y i = F ( X i ). It is important to realize that SPL_INIT should be called only once to process an entire tabulated function in arrays X and Y . Once this has been done, ...",t:"SPL_INIT "},"1288":{i:0.000260165426464894,u:"../Content/Reference Material/S/SPL_INTERP.htm",a:"Given the arrays X and Y , which tabulate a function (with the X i in ascending order), and given the array Y 2 , which is the output from SPL_INIT, and given an input value of X 2 , the SPL_INTERP function returns a cubic-spline interpolated value for the given value of X I . Examples To create a ...",t:"SPL_INTERP "},"1289":{i:0.000578081758962421,u:"../Content/Reference Material/S/SPLINE.htm",a:"The SPLINE function performs cubic spline interpolation. It accepts single- or double-precision input. This routine is written in the IDL language. Its source code can be found in the file spline.pro in the lib subdirectory of the IDL distribution. Examples The commands below show a typical use of ...",t:"SPLINE "},"1290":{i:0.000544032198502538,u:"../Content/Reference Material/S/SPLINE_P.htm",a:"The SPLINE_P procedure performs parametric cubic spline interpolation with relaxed or clamped end conditions. This routine is both more general and faster than the SPLINE function. One call to SPLINE_P is equivalent to two calls to SPLINE, as both the X and Y are interpolated with splines. It is ...",t:"SPLINE_P"},"1291":{i:0.000402739410769806,u:"../Content/Reference Material/S/SPRSAB.htm",a:"The SPRSAB function performs matrix multiplication on two row-indexed sparse arrays created by SPRSIN. The routine computes all components of the matrix products, but only stores those values whose absolute magnitude exceeds the threshold value. SPRSAB is based on the routine sprstm described in ...",t:"SPRSAB "},"1292":{i:0.000402739410769806,u:"../Content/Reference Material/S/SPRSAX.htm",a:"The SPRSAX function takes a row-indexed sparse array created by the SPRSIN function and multiplies it by an n -element vector to its right. Examples ; Begin by creating an array A: A = [[ 5.0,  0.0, 0.0], $ [ 3.0, -2.0, 0.0], $ [ 4.0, -1.0, 0.0]] ; Define the right-hand vector: X = [1.0, 2.0, -1.0] ...",t:"SPRSAX "},"1293":{i:0.000402739410769806,u:"../Content/Reference Material/S/SPRSIN.htm",a:"The SPRSIN function converts an array, or list of subscripts and values, into a row-index sparse storage mode, retaining only elements with an absolute magnitude greater than or equal to the specified threshold. The list form is much more efficient than the array form if the density of the matrix is ...",t:"SPRSIN "},"1294":{i:0.000270003814188403,u:"../Content/Reference Material/S/SPRSTP.htm",a:"The SPRSTP function constructs the transpose of a sparse matrix. Examples This example creates a 100 by 100 pseudo-random sparse matrix, with 1000 non-zero elements, and then computes the product of the matrix and its transpose: n = 100                   ;Dimensions of matrix m = ...",t:"SPRSTP "},"1295":{i:5.52317565356281E-05,u:"../Content/Reference Material/S/SQRT.htm",a:"The SQRT function computes the square root of X . Examples To find the square root of 145 and store the result in variable S, enter: S = SQRT(145) Syntax Result = SQRT( X ) Return Value Returns the square root of X . Arguments X The value for which the square root is desired. If X is ...",t:"SQRT "},"1296":{i:0.000125926175093618,u:"../Content/Reference Material/S/STANDARDIZE.htm",a:"The STANDARDIZE function computes standardized variables from an array of m variables (columns) and n observations (rows). This routine is written in the IDL language. Its source code can be found in the file standardize.pro in the lib subdirectory of the IDL distribution. Examples ; Define an array ...",t:"STANDARDIZE"},"1297":{i:0.000357433692525937,u:"../Content/Reference Material/S/STDDEV.htm",a:"The STDDEV function computes the standard deviation of an n -element vector. STDDEV uses the MOMENT function to compute the standard deviation. See MOMENT for details on how the value is calculated. Examples ; Define the n-element vector of sample data: x = [65, 63, 67, 64, 68, 62, 70, 66, 68, 67, ...",t:"STDDEV"},"1298":{i:0.00022452073244849,u:"../Content/Reference Material/S/STOP.htm",a:"The STOP procedure stops the execution of a running program or batch file. Control reverts to the interactive mode. Examples Suppose that you want to stop the execution of a procedure and print the values of the variables A, B, C and NUM. At the appropriate location in your procedure include the ...",t:"STOP "},"1299":{i:0.000483258425970682,u:"../Content/Reference Material/S/STRARR.htm",a:"The STRARR function returns a string array containing zero-length strings. Examples To create S, a 20-element string vector, enter: S = STRARR(20) Syntax Result = STRARR( D 1 [ , ... , D 8 ] ) Return Value The result is a string array of the specified dimensions. Arguments D i Either an array or a ...",t:"STRARR "},"1300":{i:0.000283819387812082,u:"../Content/Reference Material/S/STRCMP.htm",a:"See also the IDL_String::StartsWith , IDL_String::EndsWith , and IDL_String::Contains methods, which provide similar functionality but with an object-oriented interface. The STRCMP function performs string comparisons between its two String arguments, returning True (1) for those that match and ...",t:"STRCMP"},"1301":{i:0.000210052603616319,u:"../Content/Reference Material/S/STRCOMPRESS.htm",a:"See also the IDL_String::Compress method, which provides similar functionality but with an object-oriented interface. The STRCOMPRESS function returns a copy of String with all whitespace (blanks and tabs) compressed to a single space or completely removed. Examples ; Create a string variable S: S = ...",t:"STRCOMPRESS "},"1302":{i:0.000172198737119796,u:"../Content/Reference Material/S/STREAMLINE.htm",a:"The STREAMLINE function draws a streamline plot. Example The following lines create the graphic shown at the top of this topic. n = 101 x = 10*DINDGEN(n)/(n-1) - 5 y = 10*DINDGEN(n)/(n-1) - 5 xx = REBIN(x, n, n) yy = REBIN(TRANSPOSE(y), n, n) mu = 1 xdot = mu*(xx - xx^3/3 - yy) ydot = xx/mu  s = ...",t:"STREAMLINE"},"1303":{i:9.7111730910159E-05,u:"../Content/Reference Material/S/STREAMLINE_Procedure.htm",a:"Please see the STREAMLINE function, which provides enhanced functionality and offers an interactive interface. The STREAMLINE procedure generates the visualization graphics from a path. The output is a polygonal ribbon which is tangent to a vector field along its length. The ribbon is generated by ...",t:"STREAMLINE Procedure"},"1304":{i:0.000348055547989037,u:"../Content/Reference Material/S/STREGEX.htm",a:"See also the IDL_String::Extract and IDL_String::Matches methods, which provide similar functionality but with an object-oriented interface. The STREGEX function performs regular expression matching against the strings contained in StringExpression. STREGEX can perform either a simple boolean ...",t:"STREGEX "},"1305":{i:0.000226371459368894,u:"../Content/Reference Material/S/STRETCH.htm",a:"The STRETCH procedure stretches the image display color tables so the full range runs from one color index to another. The modified colortable is loaded, but the COLORS common block is not changed. The original colortable can be restored by calling STRETCH with no arguments. A colortable must be ...",t:"STRETCH "},"1306":{i:0.000768531762288965,u:"../Content/Reference Material/S/STRING.htm",a:"The STRING function returns its arguments converted to string type. It is similar to the PRINT procedure, except that its output is placed in a string rather than being output to the terminal. The case in which a single expression of type byte is specified without the FORMAT keyword is special—see ...",t:"STRING "},"1307":{i:0.000262038240640127,u:"../Content/Reference Material/S/STRJOIN.htm",a:"See also the IDL_String::Join method, which provides similar functionality but with an object-oriented interface. The STRJOIN function collapses a one-dimensional string array into a single merged string or two-dimensional string array into a one-dimensional array of merged strings. The strings in ...",t:"STRJOIN "},"1308":{i:0.000174253024875091,u:"../Content/Reference Material/S/STRLEN.htm",a:"See also the IDL_String::Strlen method, which provides similar functionality but with an object-oriented interface. The STRLEN function returns the length of its string-type argument. If the argument is not a string, it is first converted to string type. Examples To find the length of the string ...",t:"STRLEN "},"1309":{i:0.000176968936708888,u:"../Content/Reference Material/S/STRLOWCASE.htm",a:"See also the IDL_String::ToLower method, which provides similar functionality but with an object-oriented interface. The STRLOWCASE function returns a copy of String converted to lowercase characters. Only uppercase characters are modified—lowercase and non-alphabetic characters are copied without ...",t:"STRLOWCASE "},"1310":{i:0.000283819387812082,u:"../Content/Reference Material/S/STRMATCH.htm",a:"See also the IDL_String::Contains and IDL_String::Matches methods, which provide similar functionality but with an object-oriented interface. The STRMATCH function compares its search string, which can contain wildcard characters, against the input string expression. The result is an array with the ...",t:"STRMATCH "},"1311":{i:0.000211646585612442,u:"../Content/Reference Material/S/STRMESSAGE.htm",a:"The STRMESSAGE function returns the text of the error message specified by Err . This function is especially useful in conjunction with the CODE field of the !ERROR_STATE system variable which always contains the error number of the last error. The MSG field of the !ERROR_STATE system variable ...",t:"STRMESSAGE "},"1312":{i:0.000460129028579137,u:"../Content/Reference Material/S/STRMID.htm",a:"See also the IDL_String::CharAt , IDL_String::Remove , and IDL_String::Substring methods, which provide similar functionality but with an object-oriented interface. The STRMID function extracts one or more substrings from a string expression. Each extracted string is the result of removing ...",t:"STRMID "},});