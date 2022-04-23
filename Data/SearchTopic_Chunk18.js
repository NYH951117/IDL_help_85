define({"1313":{i:0.00049021451678753,u:"../Content/Reference Material/S/STRPOS.htm",a:"See also the IDL_String::IndexOf and IDL_String::LastIndexOf methods, which provide similar functionality but with an object-oriented interface. The STRPOS function finds the first occurrence of a substring within an object string. Examples Find the position of the string “fun” within the string ...",t:"STRPOS "},"1314":{i:0.000263260128329438,u:"../Content/Reference Material/S/STRPUT.htm",a:"See also the IDL_String::Insert and IDL_String::Replace methods, which provide similar functionality but with an object-oriented interface. The STRPUT procedure inserts the contents of one string into another. The source string, Source , is inserted into the destination string, Destination , ...",t:"STRPUT "},"1315":{i:0.00066316254277519,u:"../Content/Reference Material/S/STRSPLIT.htm",a:"See also the IDL_String::Extract and IDL_String::Split methods, which provide similar functionality but with an object-oriented interface. The STRSPLIT function splits its input String argument into separate substrings, according to the specified delimiter or regular expression. By default, an array ...",t:"STRSPLIT "},"1316":{i:0.000351915276748283,u:"../Content/Reference Material/S/STRTRIM.htm",a:"See also the IDL_String::Trim method, which provides similar functionality but with an object-oriented interface. The STRTRIM function removes leading and/or trailing blank from the input String . Examples Converting variables to string type often results in undesirable leading blanks. For example, ...",t:"STRTRIM "},"1317":{i:0.000238675958744557,u:"../Content/Reference Material/S/STRUCT_ASSIGN.htm",a:"The IDL “=” operator is unable to assign a structure value to a structure of a different type. The STRUCT_ASSIGN procedure performs “relaxed structure assignment,” which is a field-by-field copy of a structure to another structure. Fields are copied according to the following rules: Any fields found ...",t:"STRUCT_ASSIGN "},"1318":{i:7.12750019540163E-05,u:"../Content/Reference Material/S/STRUCT_HIDE.htm",a:"The IDL HELP procedure displays information on all known structures or object classes when used with the STRUCTURES or OBJECTS keywords. Although this is usually the desired behavior, authors of large vertical applications or library routines may wish to prevent IDL from displaying information on ...",t:"STRUCT_HIDE "},"1319":{i:0.000176968936708888,u:"../Content/Reference Material/S/STRUPCASE.htm",a:"See also the IDL_String::ToUpper method, which provides similar functionality but with an object-oriented interface. The STRUPCASE function returns a copy of String converted to upper case. Only lowercase characters are modified—uppercase and non-alphabetic characters are copied without change. ...",t:"STRUPCASE "},"1320":{i:0.000428138108081828,u:"../Content/Reference Material/S/SURFACE.htm",a:"The SURFACE function draws a three-dimensional surface for a two-dimensional array of data. Instead of data, you can also input an equation of X and Y using either the input argument or the EQUATION property. In this case IDL will automatically generate the independent X and Y values and use your ...",t:"SURFACE"},"1321":{i:0.000395306843296683,u:"../Content/Reference Material/S/SURFACE_Procedure.htm",a:"Please see the SURFACE function, which replicates the functionality of this routine and offers an interactive interface. The SURFACE procedure draws a wire-mesh representation of a two-dimensional array projected into two dimensions, with hidden lines removed. SURFACE accepts a two-dimensional array ...",t:"SURFACE Procedure"},"1322":{i:0.000438848600994337,u:"../Content/Reference Material/S/SURFR_Procedure.htm",a:"The SURFR procedure sets up 3-D transformations. This procedure duplicates the rotation, translation, and scaling features of the SURFACE routine, but does not display any data. The resulting transformations are stored in the !P.T system variable. This routine is written in the IDL language. Its ...",t:"SURFR Procedure"},"1323":{i:0.000180283473930853,u:"../Content/Reference Material/S/SVDC.htm",a:"The SVDC procedure computes the Singular Value Decomposition (SVD) of a square ( n x n ) or non-square ( n x m ) array as the product of orthogonal and diagonal arrays. SVD is a very powerful tool for the solution of linear systems, and is often used when a solution cannot be determined by other ...",t:"SVDC "},"1324":{i:0.000586427162365009,u:"../Content/Reference Material/S/SVDFIT.htm",a:"The SVDFIT function performs a least squares fit with optional error estimates. Either a user-supplied function written in the IDL language or a built-in polynomial can be used to fit the data. SVDFIT only works for functions whose parameters are linearly independent. To perform a fit for a function ...",t:"SVDFIT"},"1325":{i:0.000493573907460771,u:"../Content/Reference Material/S/SVSOL.htm",a:"The SVSOL function uses “back-substitution” to solve a set of simultaneous linear equations Ax = b, given the U , W , and V arrays returned by the SVDC procedure. None of the input arguments are modified, making it possible to call SVSOL multiple times with different right hand vectors, B . Examples ...",t:"SVSOL "},"1326":{i:0.000241807832160383,u:"../Content/Reference Material/S/SWAP_ENDIAN.htm",a:"The SWAP_ENDIAN function reverses the byte ordering of arbitrary scalars, arrays or structures. It can make “big endian” number “little endian” and vice-versa. The BYTEORDER procedure can be used to reverse the byte ordering of scalars and arrays (SWAP_ENDIAN also allows structures). This routine is ...",t:"SWAP_ENDIAN "},"1327":{i:0.000173295367960516,u:"../Content/Reference Material/S/SWAP_ENDIAN_INPLACE.htm",a:"The SWAP_ENDIAN_INPLACE procedure reverses the byte ordering of arbitrary scalars, arrays or structures. It can make “big endian” number “little endian” and vice-versa. The BYTEORDER procedure can be used to reverse the byte ordering of scalars and arrays (SWAP_ENDIAN_INPLACE also allows ...",t:"SWAP_ENDIAN_INPLACE "},"1328":{i:0.000285878412738906,u:"../Content/Reference Material/S/SWITCH.htm",a:"The SWITCH statement is used to select one statement or block of statements for execution from multiple choices, depending upon the value of the expression following the word SWITCH. Each statement that is part of a SWITCH statement is preceded by an expression that is compared to the value of the ...",t:"SWITCH "},"1329":{i:0.000171542526006888,u:"../Content/Reference Material/S/SYMBOL.htm",a:"The SYMBOL function adds a symbol or multiple symbols (with optional text labels) to the current IDL graphic. Example This example draws a map of the western United States with the state capitals. The symbol location is specified with lon/lat coordinates, and is automatically transformed to the map ...",t:"SYMBOL"},"1330":{i:0.000782380797458402,u:"../Content/Reference Material/S/SYSTIME.htm",a:"The SYSTIME function returns the current time as either a date/time string, as the number of seconds elapsed since 1 January 1970, or as a Julian date/time value. Additionally, given an arbitrary number of seconds elapsed since 1 January 1970, SYSTIME can also return the corresponding date/time ...",t:"SYSTIME "},"1331":{i:5.50327019655568E-05,u:"../Content/Reference Material/T/T_list.htm",a:"T Routines ",t:"T Routines"},"1332":{i:0.000408032265503576,u:"../Content/Reference Material/T/T_CVT.htm",a:"The T_CVF function computes the cutoff value V in a Student’s t distribution with Df degrees of freedom such that the probability that a random variable X is greater than V is equal to a user-supplied probability P . T_CVF computes the cutoff value using the one-tailed probability. The cutoff value ...",t:"T_CVF "},"1333":{i:0.000486180480269618,u:"../Content/Reference Material/T/T_PDF.htm",a:"The T_PDF function computes the cumulative distribution function for a Student\u0027s t distribution with Df degrees of freedom. This is the probability P that, in a Student’s t distribution, a random variable X is less than or equal to a user-specified cutoff value V . T_PDF computes the one-tailed ...",t:"T_PDF "},"1334":{i:0.000507416373071105,u:"../Content/Reference Material/T/T3D_Procedure.htm",a:"The T3D procedure implements three-dimensional transforms. This routine accumulates one or more sequences of translation, scaling, rotation, perspective, and oblique transformations and stores the result in !P.T (the 3D transformation system variable) or in a variable specified by the MATRIX ...",t:"T3D Procedure"},"1335":{i:0.000420100886312374,u:"../Content/Reference Material/T/TAG_NAMES.htm",a:"The TAG_NAMES function returns a string array containing the names of the tags in a structure expression. It can also be used to determine the expression’s structure name (if the structure has a name). TAG_NAMES and Object Class Definition Structures Although an instance of an object class has an ...",t:"TAG_NAMES"},"1336":{i:0.000184376209507293,u:"../Content/Reference Material/T/TAN.htm",a:"The TAN function computes the tangent of X . Examples ; Find the tangent of 0.5 radians and store the result in ; the variable T: T = TAN(0.5) Syntax Result = TAN( X ) Return Value Returns the tangent of the specified angle. Arguments X The angle for which the tangent is desired, specified in ...",t:"TAN "},"1337":{i:0.000184376209507293,u:"../Content/Reference Material/T/TANH.htm",a:"The TANH function returns the hyperbolic tangent of X. Examples ; Find the hyperbolic tangent of 1 radian and print the result: PRINT, TANH(1) ; Plot the hyperbolic tangent from -5 to +5 with an increment ; of 0.1: PLOT, TANH(FINDGEN(101)/10. - 5) Syntax Result = TANH( X ) Return Value Returns the ...",t:"TANH "},"1338":{i:5.77047329653662E-05,u:"../Content/Reference Material/T/TEK_COLOR_Procedure.htm",a:"The TEK_COLOR procedure loads a 32-color colortable similar to the default Tektronix 4115 color table. This color table is useful because of its distinct colors. By default, this palette consists of 32 colors. The first 9 colors are: Index 0=black, 1=white, 2=red, 3=green, 4=blue, 5=cyan, 6=magenta, ...",t:"TEK_COLOR Procedure"},"1339":{i:0.000690259830921912,u:"../Content/Reference Material/T/TEMPORARY.htm",a:"The TEMPORARY function returns a temporary copy of a variable, and sets the original variable to “undefined”. This function can be used to conserve memory when performing operations on large arrays, as it avoids making a new copy of results that are only temporary. In general, the TEMPORARY routine ...",t:"TEMPORARY "},"1340":{i:5.64845005344347E-05,u:"../Content/Reference Material/T/TERMINAL_SIZE.htm",a:"The TERMINAL_SIZE function allows you to set and retrieve the column width and number of lines that are used for IDL output to the console. This function works for either the Console View in the IDL Workbench or the \"tty\" terminal shell for command-line IDL. The column width is used by IDL for ...",t:"TERMINAL_SIZE"},"1341":{i:0.000372252309330832,u:"../Content/Reference Material/T/TETRA_CLIP.htm",a:"The TETRA_CLIP function clips a tetrahedral mesh to an arbitrary plane in space and returns a tetrahedral mesh of the remaining portion. An auxiliary array of data may also be passed and clipped. This array can have multiple values for each vertex (the trailing array dimension must match the number ...",t:"TETRA_CLIP "},"1342":{i:5.58392161718803E-05,u:"../Content/Reference Material/T/TETRA_SURFACE.htm",a:"The TETRA_SURFACE function extracts a polygonal mesh as the exterior surface of a tetrahedral mesh. The output of this function is a polygonal mesh connectivity array that can be used with the input Verts array to display the outer surface of the tetrahedral mesh. Syntax Result = TETRA_SURFACE ( ...",t:"TETRA_SURFACE "},"1343":{i:0.000372252309330832,u:"../Content/Reference Material/T/TETRA_VOLUME.htm",a:"The TETRA_VOLUME function computes properties of a tetrahedral mesh array. The basic property is the volume. An auxiliary data array may be supplied which specifies weights at each vertex which are interpolated through the volume during integration. Higher order moments (with respect to the X, Y, ...",t:"TETRA_VOLUME "},"1344":{i:0.000843768218648766,u:"../Content/Reference Material/T/TEXT.htm",a:"The TEXT function adds a text annotation to the current IDL Graphic. Example The following lines create the plot shown above. x = 0.01*(FINDGEN(201)) p1 = PLOT(x, EXPINT(1, x), \u00272\u0027, YRANGE=[0,2]) p2 = PLOT(x, EXPINT(2, x), \u0027r2\u0027, /OVERPLOT) p3 = PLOT(x, EXPINT(3, x), \u0027g2\u0027, /OVERPLOT) t1 = TEXT(0.3, ...",t:"TEXT"},"1345":{i:7.76486704237332E-05,u:"../Content/Reference Material/T/THIN.htm",a:"The THIN function returns the “skeleton” of a bi-level image. The skeleton of an object in an image is a set of lines that reflect the shape of the object. The set of skeletal pixels can be considered to be the medial axis of the object. On input, the bi-level image is a rectangular array in which ...",t:"THIN "},"1346":{i:0.00426644980948849,u:"../Content/Creating IDL Programs/Appendices/tpoolkeyw.htm",a:"Many of the system routines documented in this manual make use of the IDL thread pool. System-wide use of the thread pool can be controlled with the CPU procedure, and the current system settings are visible via the !CPU system variable. All system routines that use the thread pool accept the ...",t:"Thread Pool Keywords"},"1347":{i:9.74087890302798E-05,u:"../Content/Reference Material/T/THREED_Procedure.htm",a:"The THREED procedure plots a 2-D array as a pseudo 3-D plot. The orientation of the data is fixed. This routine is written in the IDL language. Its source code can be found in the file threed.pro in the lib subdirectory of the IDL distribution. Examples ; Create a 2-D dataset: A = -SHIFT(DIST(30), ...",t:"THREED Procedure"},"1348":{i:0.00062658320675118,u:"../Content/Reference Material/T/TIC.htm",a:"The TIC and TOC routines work together to allow you to check the running time of your IDL programs. The TIC routine stores the initial system time. TOC records the final system time, then calculates and displays the total elapsed time (final time - system time). You may call the TIC routine  as ...",t:"TIC"},"1349":{i:5.50327019655568E-05,u:"../Content/Reference Material/T/TIME_TEST2.htm",a:"The TIME_TEST2 procedure is a general-purpose IDL benchmark program that performs approximately 20 common operations and prints the time required. This routine is written in the IDL language. Its source code can be found in the file time_test.pro in the lib subdirectory of the IDL distribution. This ...",t:"TIME_TEST2 "},"1350":{i:0.000322860324109588,u:"../Content/Reference Material/T/TIMEGEN.htm",a:"The TIMEGEN function returns an array, with specified dimensions, of double-precision floating-point values that represent times in terms of Julian dates. The Julian date is the number of days elapsed since Jan. 1, 4713 B.C.E., plus the time expressed as a day fraction. Following the astronomical ...",t:"TIMEGEN "},"1351":{i:0.000166358757830128,u:"../Content/Reference Material/T/TIMER.htm",a:"Asynchronous timers provide IDL with non-blocking timers.  They offer the following advantages over widget-based asynchronous timers: Asynchronous timers work in headless environments (are independent of widgets) Higher theoretical resolution Unix: nanoseconds Windows: milliseconds Asynchronous ...",t:"TIMER"},"1352":{i:0.000160486148631182,u:"../Content/Reference Material/T/TIMESTAMP.htm",a:"The TIMESTAMP function returns one or more date/time strings in ISO-8601 format, when you provide a year, month, day, hour, minute, second, and offset from Coordinated Universal Time (UTC). If this function is called without keywords, it returns a string with the system time in UTC. This function is ...",t:"TIMESTAMP"},"1353":{i:0.000160486148631182,u:"../Content/Reference Material/T/TIMESTAMPTOVALUES.htm",a:"The TIMESTAMPTOVALUES procedure passes through the year, month, day, hour, minute, second, and offset from Coordinated Universal Time (UTC), given a date/time string in ISO-8601 format. This function is the inverse to TIMESTAMP . This routine is written in the IDL language. Its source code can be ...",t:"TIMESTAMPTOVALUES"},"1354":{i:0.000398153692529309,u:"../Content/Reference Material/T/TM_TEST.htm",a:"The TM_TEST function computes the Student’s T-statistic and the probability that two sample populations X and Y have significantly different means. X and Y may be of different lengths. The default assumption is that the data is drawn from populations with the same true variance. This type of test is ...",t:"TM_TEST "},"1355":{i:0.000488245370876535,u:"../Content/Reference Material/T/TOC.htm",a:"The TIC and TOC routines work together to allow you to check the running time of your IDL programs. The TIC routine stores the initial system time. TOC records the final system time, then calculates and displays the total elapsed time (final time - system time). You may call the TIC routine  as ...",t:"TOC"},"1356":{i:0.000253938184151218,u:"../Content/Reference Material/T/TOTAL.htm",a:"The TOTAL function returns the sum of the elements of Array . The sum of the array elements over a given dimension is returned if the Dimension argument is present. Examples See Additional Examples for more information on using TOTAL. Example 1 This example sums the elements of a one-dimensional ...",t:"TOTAL"},"1357":{i:9.60552786941031E-05,u:"../Content/Reference Material/T/TRACE.htm",a:"The TRACE function computes the trace of an n by n array. This routine is written in the IDL language. Its source code can be found in the file trace.pro in the lib subdirectory of the IDL distribution. Examples ; Define an array: A = [[ 2.0,1.0,  1.0, 1.5], $ [ 4.0, -6.0,  0.0, 0.0], $ [-2.0,  7.0, ...",t:"TRACE "},"1358":{i:0.000991009281225517,u:"../Content/Reference Material/T/TRANSPOSE.htm",a:"The TRANSPOSE function returns the transpose of Array . If an optional permutation vector is provided, the dimensions of Array are rearranged as well. Examples See Additional Examples for more information on using TRANSPOSE. Example 1 Print a simple array and its transpose by entering: ; Create an ...",t:"TRANSPOSE"},"1359":{i:0.000356830869110799,u:"../Content/Reference Material/T/TRI_SURF.htm",a:"The TRI_SURF function interpolates a regularly- or irregularly-gridded set of points with a smooth quintic surface. TRI_SURF is similar to MIN_CURVE_SURF but the surface fitted is a smooth surface, not a minimum curvature surface. TRI_SURF has the advantage of being much more efficient for larger ...",t:"TRI_SURF "},"1360":{i:0.000565934020120181,u:"../Content/Reference Material/T/TRIANGULATE.htm",a:"The TRIANGULATE procedure constructs a Delaunay triangulation of a planar set of points. Delaunay triangulations are very useful for the interpolation, analysis, and visual display of irregularly-gridded data. In most applications, after the irregularly gridded data points have been triangulated, ...",t:"TRIANGULATE "},"1361":{i:0.000504090226475346,u:"../Content/Reference Material/T/TRIGRID.htm",a:"For non-spherical data, given data points defined by the parameters X, Y, and Z and a triangulation of the planar set of points determined by X and Y , the TRIGRID function returns a regular grid of interpolated Z values. Linear or smooth quintic polynomial interpolation can be selected. ...",t:"TRIGRID "},"1362":{i:0.000561178074290871,u:"../Content/Reference Material/T/TRIQL.htm",a:"The TRIQL procedure uses the QL algorithm with implicit shifts to determine the eigenvalues and eigenvectors of a real, symmetric, tridiagonal array. The routine TRIRED can be used to reduce a real, symmetric array to the tridiagonal form suitable for input to this procedure. If you are working with ...",t:"TRIQL "},"1363":{i:0.000532857976285114,u:"../Content/Reference Material/T/TRIRED.htm",a:"The TRIRED procedure uses Householder’s method to reduce a real, symmetric array to tridiagonal form. If you are working with complex inputs, use the LA_TRIRED procedure instead. Examples See the description of TRIQL for an example using this function. Syntax TRIRED, A , D , E [, / DOUBLE ] ...",t:"TRIRED "},"1364":{i:0.000539993634293191,u:"../Content/Reference Material/T/TRISOL.htm",a:"The TRISOL function solves tridiagonal systems of linear equations that have the form: A T U = R Because IDL subscripts are in column-row order, the equation above is written A T U = R rather than AU = R. The result U is a vector of length n whose type is identical to A . TRISOL is based on the ...",t:"TRISOL "},"1365":{i:0.000137352728382664,u:"../Content/Reference Material/T/TRUNCATE_LUN.htm",a:"The TRUNCATE_LUN procedure truncates the contents of a file (which must be open for write access) at the current position of the file pointer. After this operation, all data before the current file pointer remains intact, and all data following the file pointer are gone. The position of the current ...",t:"TRUNCATE_LUN "},"1366":{i:0.000191880632749662,u:"../Content/Reference Material/T/TS_COEF.htm",a:"The TS_COEF function computes the coefficients φ 1 , φ 2 , ... , φ P used in a P- th order autoregressive time-series forecasting model. This routine is written in the IDL language. Its source code can be found in the file ts_coef.pro in the lib subdirectory of the IDL distribution. Examples ; ...",t:"TS_COEF "},"1367":{i:0.000360166539417194,u:"../Content/Reference Material/T/TS_DIFF.htm",a:"The TS_DIFF function recursively computes the forward differences of an n -element time-series k times. This routine is written in the IDL language. Its source code can be found in the file ts_diff.pro in the lib subdirectory of the IDL distribution. Examples ; Define an n-element vector of ...",t:"TS_DIFF "},"1368":{i:0.000441716262995081,u:"../Content/Reference Material/T/TS_FCAST.htm",a:"The TS_FCAST function computes future or past values of a stationary time-series using a P- th order autoregressive model. A P- th order autoregressive model relates a forecasted value x t of the time series X = [ x 0 , x 1 , x 2 , ... , x t-1 ], as a linear combination of P past values. The ...",t:"TS_FCAST "},"1369":{i:6.98828078775762E-05,u:"../Content/Reference Material/T/TS_HANTS.htm",a:"The TS_HANTS (Harmonic ANalysis of Time Series) function can be used to smooth noisy data or interpolate data to reconstruct incomplete images. This is accomplished by calculating a Fourier series to the data while filtering/replacing outliers with values determined by the Fourier transform. This ...",t:"TS_HANTS "},"1370":{i:6.63044685156903E-05,u:"../Content/Reference Material/T/TS_LANCZOS.htm",a:"The TS_LANCZOS function can be used to smoothly interpolate the input data over a Lanczos kernel or be used as a low-pass filter. This routine is written in the IDL language. Its source code can be found in the file TS_LANZCOS.pro in the lib subdirectory of the IDL distribution. Examples range = ...",t:"TS_LANCZOS"},"1371":{i:0.000163509325803331,u:"../Content/Reference Material/T/TS_SMOOTH.htm",a:"The TS_SMOOTH function computes central, backward, or forward moving averages of an n -element time-series. Autoregressive forecasting and backcasting are used to extrapolate the time-series and compute a moving average for each point. Central moving averages require Nvalues /2 forecasts and Nvalues ...",t:"TS_SMOOTH "},"1372":{i:6.98828078775762E-05,u:"../Content/Reference Material/T/TS_SPECTROGRAM.htm",a:"The TS_SPECTROGRAM generates a spectrogram of a given vector. This routine is written in the IDL language. Its source code can be found in the file TS_SPECTROGRAM.pro in the lib subdirectory of the IDL distribution. Examples t = findgen(100000) data = sin(2*!pi*.02*t) + sin(2*!pi*.12*t) + ...",t:"TS_SPECTROGRAM"},"1373":{i:0.000241219732669961,u:"../Content/Reference Material/T/TV_Procedure.htm",a:"Please see the IMAGE function, which replicates the functionality of this routine and offers an interactive interface. The TV procedure displays images in a Direct Graphics window without scaling the intensity. To display an image with scaling, use the TVSCL procedure. The TV procedure displays an ...",t:"TV Procedure"},"1374":{i:0.000149148945384186,u:"../Content/Reference Material/T/TVCRS_Procedure.htm",a:"The TVCRS procedure manipulates the display device cursor. The initial state of the cursor is device dependent. Call TVCRS with one argument to enable or disable the cursor. Call TVCRS with two parameters to enable the cursor and place it on pixel location (X, Y) . Examples To enable the graphics ...",t:"TVCRS Procedure"},"1375":{i:9.60365270306892E-05,u:"../Content/Reference Material/T/TVLCT_Procedure.htm",a:"The TVLCT procedure loads the display color translation tables from the specified variables. Although IDL uses the RGB color system internally, color tables can be specified to TVLCT using any of the following color systems: RGB (Red, Green, Blue), HLS (Hue, Lightness, Saturation), and HSV (Hue, ...",t:"TVLCT Procedure"},"1376":{i:0.000431408139900014,u:"../Content/Reference Material/T/TVRD.htm",a:"The TVRD function returns the contents of the specified rectangular portion of the current Direct Graphics window or device. ( X 0 , Y 0 ) is the coordinate of the lower left corner of the area to be read and N x , N y is the size of the rectangle in columns and rows. The result is a byte array of ...",t:"TVRD "},"1377":{i:0.000127196442042575,u:"../Content/Reference Material/T/TVSCL_Procedure.htm",a:"The TVSCL procedure scales the intensity values of Image into the range of the Direct Graphics image display device and outputs the data to the image display at the specified location. The array is scaled so the minimum data value becomes 0 and the maximum value becomes the maximum number of ...",t:"TVSCL Procedure"},"1378":{i:0.000580500520811687,u:"../Content/Reference Material/T/TYPENAME.htm",a:"The TYPENAME function retrieves a variable’s IDL type name, class name, or structure name. Examples For the undefined variable foo , the following IDL statement: PRINT, TYPENAME(foo) produces the output: UNDEFINED  For the variable a = 1.0, the following IDL statement: PRINT, TYPENAME(a) produces ...",t:"TYPENAME"},"1379":{i:5.50327019655568E-05,u:"../Content/Reference Material/U/U_list.htm",a:"U Routines ",t:"U Routines"},"1380":{i:7.41112348156038E-05,u:"../Content/Reference Material/U/UINDGEN.htm",a:"The UINDGEN function creates an unsigned short integer array. Each element of the array is set to the value of its one-dimensional subscript, converted to an unsigned short integer. For example, U=UINDGEN(100) will create a 100-element, 16-bit integer array with the values 0, 1, ..., 99. Syntax ...",t:"UINDGEN"},"1381":{i:0.000496466210069274,u:"../Content/Reference Material/U/UINT.htm",a:"The UINT function returns a result equal to Expression converted to unsigned integer type. Examples If A contains the floating-point value 32000.0, it can converted to an unsigned integer and stored in the variable B by entering: B = UINT(A) Syntax Result = UINT( Expression[ , Offset [ , D 1 [ , ... ...",t:"UINT "},"1382":{i:0.00051748844317432,u:"../Content/Reference Material/U/UINTARR.htm",a:"The UINTARR function creates an unsigned integer vector or array. Examples To create L, a 100-element, unsigned integer vector with each element set to 0, enter: L = UINTARR(100) Syntax Result = UINTARR( D 1 [ , ... , D 8 ] [, / NOZERO ] ) Return Value Returns an unsigned integer vector or array of ...",t:"UINTARR "},"1383":{i:7.41112348156038E-05,u:"../Content/Reference Material/U/UL64INDGEN.htm",a:"The UL64INDGEN function returns an unsigned 64-bit integer array with the specified dimensions. Each element of the array is set to the value of its one-dimensional subscript. For example, U=UL64INDGEN(100) will create a 100-element, 64-bit unsigned integer array with the values 0, 1, ..., 99. ...",t:"UL64INDGEN"},"1384":{i:7.41112348156038E-05,u:"../Content/Reference Material/U/ULINDGEN.htm",a:"The ULINDGEN function returns an unsigned longword array with the specified dimensions. Each element of the array is set to the value of its one-dimensional subscript. For example, U=ULINDGEN(100) will create a 100-element, 32-bit unsigned integer array with the values 0, 1, ..., 99. Syntax Result = ...",t:"ULINDGEN"},"1385":{i:0.00051748844317432,u:"../Content/Reference Material/U/ULON64ARR.htm",a:"The ULON64ARR function returns an unsigned 64-bit integer vector or array. Examples To create L, a 100-element, unsigned 64-bit vector with each element set to 0, enter: L = ULON64ARR(100) Syntax Result = ULON64ARR( D 1 [ , ... , D 8 ] [, / NOZERO ] ) Return Value Returns a vector or array of the ...",t:"ULON64ARR "},"1386":{i:0.00051748844317432,u:"../Content/Reference Material/U/ULONARR.htm",a:"The ULONARR function returns an unsigned longword integer vector or array. Examples To create L, a 100-element, unsigned longword vector with each element set to 0, enter: L = ULONARR(100) Syntax Result = ULONARR( D 1 [ , ... , D 8 ] [, / NOZERO ] ) Return Value Returns an unsigned longword integer ...",t:"ULONARR "},"1387":{i:0.000496466210069274,u:"../Content/Reference Material/U/ULONG.htm",a:"The ULONG function returns a result equal to Expression converted to the unsigned longword integer type. Examples If A contains the floating-point value 32000.0, it can converted to an unsigned longword integer and stored in the variable B by entering: B = ULONG(A) Syntax Result = ULONG( Expression[ ...",t:"ULONG "},"1388":{i:0.000490598378698678,u:"../Content/Reference Material/U/ULONG64.htm",a:"The ULONG64 function returns a result equal to Expression converted to the unsigned 64-bit integer type. Examples If A contains the floating-point value 32000.0, it can converted to an unsigned 64-bit integer and stored in the variable B by entering: B = ULONG64(A) Syntax Result = ULONG64( ...",t:"ULONG64 "},});