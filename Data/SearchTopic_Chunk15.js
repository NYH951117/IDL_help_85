define({"1089":{i:0.000175263321350597,u:"../Content/Reference Material/O/OBJ_HASMETHOD.htm",a:"The OBJ_HASMETHOD function determines whether an object class implements or inherits a specified method or methods. The function returns true for a given class and method combination if the class or any of its superclasses defines the method. Syntax Result = OBJ_HASMETHOD( Objref , Method ) Return ...",t:"OBJ_HASMETHOD"},"1090":{i:0.000709538756981572,u:"../Content/Reference Material/O/OBJ_ISA.htm",a:"When one object class is subclassed (inherits) from another class, there is an “Is A” relationship between them. The OBJ_ISA function is used to determine if an object class or instance is subclassed from the specified class. Example To call OBJ_ISA with a string class name rather than an object ...",t:"OBJ_ISA "},"1091":{i:0.000703411251055928,u:"../Content/Reference Material/O/OBJ_NEW.htm",a:"Given the name of a structure that defines an object class, the OBJ_NEW function returns an object reference to a new instance of the specified object type by carrying out the following operations in order: If the class structure has not been defined, IDL will attempt to find and call a procedure to ...",t:"OBJ_NEW"},"1092":{i:0.00112194519045828,u:"../Content/Reference Material/O/OBJ_VALID.htm",a:"The OBJ_VALID function verifies the validity of its argument object references, or alternatively returns a vector of references to valid objects. Examples To determine if a given object reference refers to a valid heap variable, use: IF (OBJ_VALID(obj)) THEN … To destroy all existing pointer heap ...",t:"OBJ_VALID "},"1093":{i:7.21032540336636E-05,u:"../Content/Reference Material/O/OBJARR.htm",a:"The OBJARR function returns an object reference vector or array. The individual elements of the array are set to the NULL object reference. Examples Create a 3 element by 3 element object reference array with each element containing the null object reference: A = OBJARR(3, 3) Syntax Result = OBJARR( ...",t:"OBJARR "},"1094":{i:0.000377677143409914,u:"../Content/Reference Material/O/ON_ERROR.htm",a:"The ON_ERROR procedure determines the action taken when an error is detected inside an IDL user procedure or function by setting state information applying to the current routine and all nested routines. If an override exists within the nested routine, it takes precedence over the ON_ERROR call. ...",t:"ON_ERROR "},"1095":{i:0.000388714908346061,u:"../Content/Reference Material/O/ON_IOERROR.htm",a:"The ON_IOERROR procedure specifies a statement to be jumped to if an I/O error occurs in the current procedure. Normally, when an I/O error occurs, an error message is printed and program execution is stopped. If ON_IOERROR is called and an I/O related error later occurs in the same procedure ...",t:"ON_IOERROR "},"1096":{i:8.76684032849506E-05,u:"../Content/Reference Material/O/ONLINE_HELP.htm",a:"The ONLINE_HELP procedure invokes IDL’s online help system. If called with no arguments, it starts the help viewer with the default IDL help topic displayed. This procedure is intended for use in user-written routines. The ? command, which is a shorthand for the ONLINE_HELP procedure, is intended ...",t:"ONLINE_HELP "},"1097":{i:0.00121493025059697,u:"../Content/Reference Material/O/OPEN.htm",a:"The three OPEN procedures open a specified file for input and/or output. OPENR (OPEN Read) opens an existing file for input only. OPENW (OPEN Write) opens a new file for input and output. If the file exists, it is truncated and its old contents are destroyed. OPENU (OPEN Update) opens an existing ...",t:"OPENR/OPENU/OPENW "},"1098":{i:0.000204333713853569,u:"../Content/Reference Material/O/OPLOT_Procedure.htm",a:"The OPLOT procedure plots vector data over a previously-drawn plot. It differs from PLOT only in that it does not generate a new axis. Instead, it uses the scaling established by the most recent call to PLOT and simply overlays a plot of the data on the existing axis. Examples ; Create a simple ...",t:"OPLOT Procedure"},"1099":{i:0.000112757804010764,u:"../Content/Reference Material/O/OPLOTERR_Procedure.htm",a:"The OPLOTERR procedure plots error bars over a previously drawn plot. A plot of X versus Y with error bars drawn from Y - Err to Y + Err is written to the output device over any plot already there. This routine is written in the IDL language. Its source code can be found in the file oploterr.pro in ...",t:"OPLOTERR Procedure"},"1100":{i:0.000247929257446747,u:"../Content/Reference Material/O/ORDEREDHASH.htm",a:"The ORDEREDHASH function creates a new ordered hash. An ordered hash is a compound data type that contains key-value pairs of different data types, including any mixture of scalars, arrays, structures, pointers, object references, dictionaries , lists , hashes , and other ordered hashes. Unlike HASH ...",t:"ORDEREDHASH"},"1101":{i:5.50327019655568E-05,u:"../Content/Reference Material/P/P_list.htm",a:"P Routines ",t:"P Routines"},"1102":{i:0.00058945569046066,u:"../Content/Reference Material/P/P_CORRELATE.htm",a:"The P_CORRELATE function computes the partial correlation coefficient of a dependent variable and one particular independent variable when the effects of all other variables involved are removed. To compute the partial correlation, the following method is used: Let Y and X be the variables of ...",t:"P_CORRELATE"},"1103":{i:0.000139837838841433,u:"../Content/Reference Material/P/PARSE_URL.htm",a:"The PARSE_URL function breaks a URL string into substrings that correspond to the URL_* properties of IDLnet* objects. This is not an object method and does not set any object properties. If a port number is not found in the URL string parameter, the default port value is 80. PARSE_URL is a pure ...",t:"PARSE_URL"},"1104":{i:0.000372252309330832,u:"../Content/Reference Material/P/PARTICLE_TRACE.htm",a:"The PARTICLE_TRACE procedure traces the path of a massless particle through a vector field, given a set of starting points (or seed points). Particles are tracked by treating the vector field as a velocity field and integrating. Each particle is tracked from the seed point until the path leaves the ...",t:"PARTICLE_TRACE"},"1105":{i:0.00139233851006488,u:"../Content/Reference Material/P/PATH_CACHE.htm",a:"The PATH_CACHE procedure is used to control IDL’s use of the path cache . By default, as IDL searches directories included in the !PATH system variable for .pro or .sav files to compile, it creates an in-memory list of all .pro and .sav files contained in each directory. When IDL later searches for ...",t:"PATH_CACHE"},"1106":{i:0.000311676423701114,u:"../Content/Reference Material/P/PATH_SEP.htm",a:"The PATH_SEP function returns the proper file path segment separator character for the current operating system. This is the character used by the host operating system for delimiting subdirectory names in a path specification. Use this function instead of hard-coding separators to make code more ...",t:"PATH_SEP"},"1107":{i:0.000101033761427356,u:"../Content/Reference Material/P/PCOMP.htm",a:"The PCOMP function computes the principal components of an m -column, n -row array, where m is the number of variables and n is the number of observations or samples. The principal components of a multivariate data set may be used to restate the data in terms of derived variables or may be used to ...",t:"PCOMP "},"1108":{i:0.0012440481759535,u:"../Content/Reference Material/P/PLOT.htm",a:"The PLOT function draws a line plot of vector arguments. If one parameter is used, the vector parameter is plotted on the ordinate versus the point number on the abscissa. To plot one vector as a function of another, use two parameters. Instead of data, you can also input an equation of X using ...",t:"PLOT"},"1109":{i:0.000253240907154656,u:"../Content/Reference Material/P/PLOT3D.htm",a:"The PLOT3D function draws a three-dimensional plot of vector arguments. Example The following lines create the plot shown at the top of this topic. ; Create some data. t = FINDGEN(4001) / 100 x = COS(t) * (1 + t / 10) y = SIN(t) * (1 + t / 10) z = SIN(2 * t)  p = PLOT3D(x, y, z, \u0027o\u0027, /SYM_FILLED, $ ...",t:"PLOT3D"},"1110":{i:0.000420299619861669,u:"../Content/Reference Material/P/PLOT_Procedure.htm",a:"Please see the newer PLOT function, which replicates the functionality of this older routine but offers an interactive interface and updated functionality. The PLOT procedure draws graphs of vector arguments. If one parameter is used, the vector parameter is plotted on the ordinate versus the point ...",t:"PLOT Procedure"},"1111":{i:6.74819656859505E-05,u:"../Content/Reference Material/P/PLOT_3DBOX_Procedure.htm",a:"The PLOT_3DBOX procedure plots a function of two variables (e.g., Z=f(X, Y) ) inside a 3-D box. Optionally, the data can be projected onto the “walls” surrounding the plot area. This routine is written in the IDL language. Its source code can be found in the file plot_3dbox.pro in the lib ...",t:"PLOT_3DBOX Procedure"},"1112":{i:0.000190938539087843,u:"../Content/Reference Material/P/PLOT_FIELD_Procedure.htm",a:"The PLOT_FIELD procedure plots a 2-D field. N random points are picked, and from each point a path is traced along the field. The length of the path is proportional to the field vector magnitude. This routine is written in the IDL language. Its source code can be found in the file plot_field.pro in ...",t:"PLOT_FIELD Procedure"},"1113":{i:8.79458051607625E-05,u:"../Content/Reference Material/P/PLOTERR_Procedure.htm",a:"Please see the newer ERRORPLOT function, which replicates the functionality of this older routine but offers an interactive interface and updated functionality. The PLOTERR procedure plots individual data points with error bars. This routine is written in the IDL language. Its source code can be ...",t:"PLOTERR Procedure"},"1114":{i:0.000248171002517754,u:"../Content/Reference Material/P/PLOTS_Procedure.htm",a:"The PLOTS procedure plots vectors or points on the current graphics device in either two or three dimensions. The coordinates can be given in data, device, or normalized form using the DATA (the default), DEVICE, or NORMAL keywords. The COLOR keyword can be set to a scalar or vector value. If it is ...",t:"PLOTS Procedure"},"1115":{i:7.92789114366781E-05,u:"../Content/Reference Material/P/POLAR_CONTOUR_Procedure.htm",a:"The POLAR_CONTOUR procedure draws a contour plot from data in polar coordinates. Data can be regularly- or irregularly-gridded. All of the keyword options supported by CONTOUR are available to POLAR_CONTOUR. This routine is written in the IDL language. Its source code can be found in the file ...",t:"POLAR_CONTOUR Procedure"},"1116":{i:7.6789836178486E-05,u:"../Content/Reference Material/P/POLAR_SURFACE_Procedure.htm",a:"The POLAR_SURFACE function interpolates a surface from polar coordinates (R, Theta, Z) to rectangular coordinates (X, Y, Z). This routine is written in the IDL language. Its source code can be found in the file polar_surface.pro in the lib subdirectory of the IDL distribution. Examples ; Define ...",t:"POLAR_SURFACE Procedure"},"1117":{i:9.18290291137393E-05,u:"../Content/Reference Material/P/POLYFILL_Procedure.htm",a:"The POLYFILL procedure fills the interior of a region of the display enclosed by an arbitrary two or three-dimensional polygon. The available filling methods are: solid fill, parallel lines, or a pattern contained in an array. Not all methods are available on every hardware output device. See Fill ...",t:"POLYFILL Procedure"},"1118":{i:0.000269102398615341,u:"../Content/Reference Material/P/POLYSHADE_Procedure.htm",a:"The POLYSHADE function creates a shaded-surface representation of one or more solids described by a set of polygons. This function accepts, as arguments, an array of three-dimensional vertices and a list of the indices of the vertices that describe each polygon. Shading values are determined from ...",t:"POLYSHADE"},"1119":{i:0.000476480933197593,u:"../Content/Reference Material/P/PNT_LINE.htm",a:"The PNT_LINE function computes the perpendicular distance between a point P0 and a line between points L0 and L1 . This function is limited by the machine accuracy of single precision floating point. This routine is written in the IDL language. Its source code can be found in the file pnt_line.pro ...",t:"PNT_LINE "},"1120":{i:0.000267532358067986,u:"../Content/Reference Material/P/POINT_LUN.htm",a:"The POINT_LUN procedure sets or obtains the current position of the file pointer for the specified file. POINT_LUN cannot be used with files opened with the RAWIO keyword to the OPEN routines. Depending upon the device in question, the IOCTL function might be used instead for files of this type. Use ...",t:"POINT_LUN "},"1121":{i:0.000231258612830364,u:"../Content/Reference Material/P/POLARPLOT.htm",a:"The POLARPLOT function creates a plot using the polar coordinates R and Theta . If R is not supplied, POLARPLOT uses a vector of indices for the R argument. Example The following lines create the Nyquist plot shown at the top of this topic. ; http://www.nyquistplot.com/ w = FINDGEN(100000)*(!PI/180) ...",t:"POLARPLOT"},"1122":{i:0.000158526593624273,u:"../Content/Reference Material/P/POLY.htm",a:"The POLY function evaluates a polynomial function of a variable. This routine is written in the IDL language. Its source code can be found in the file poly.pro in the lib subdirectory of the IDL distribution. Syntax Result = POLY( X , C ) Return Value The result is equal to: C 0 + C 1 x + C 2 x 2 + ...",t:"POLY "},"1123":{i:0.000178279499791914,u:"../Content/Reference Material/P/POLY_2D.htm",a:"The POLY_2D function performs polynomial warping of images. This function performs a geometrical transformation in which the resulting array is defined by: g [x, y] = f [x\u0027, y\u0027] = f [a [x, y], b [x, y]] where g [ x , y ] represents the pixel in the output image at coordinate ( x , y ), and f [ x \u0027, ...",t:"POLY_2D "},"1124":{i:9.60552786941031E-05,u:"../Content/Reference Material/P/POLY_AREA.htm",a:"The POLY_AREA function returns the area of a polygon given the coordinates of its vertices. It is assumed that the polygon has n vertices with n sides and the edges connect the vertices in the order: [(x1,y1), (x2,y2), ... , (x n ,y n ), (x1,y1)] such that the last vertex is connected to the first ...",t:"POLY_AREA "},"1125":{i:0.000586427162365009,u:"../Content/Reference Material/P/POLY_FIT.htm",a:"The POLY_FIT function performs a least-square polynomial fit with optional weighting and returns a vector of coefficients. The POLY_FIT routine uses matrix inversion to determine the coefficients. A different version of this routine, SVDFIT, uses singular value decomposition (SVD). The SVD technique ...",t:"POLY_FIT "},"1126":{i:0.000107006909282314,u:"../Content/Reference Material/P/POLYFILLV.htm",a:"The POLYFILLV function returns a vector containing the subscripts of the array elements contained inside a polygon defined by vectors. The X and Y parameters are vectors that contain the subscripts of the vertices that define the polygon in the coordinate system of the two-dimensional S x by S y ...",t:"POLYFILLV"},"1127":{i:0.000281323537548383,u:"../Content/Reference Material/P/POLYGON.htm",a:"The POLYGON function adds a polygon annotation to an existing IDL Graphic. Example The following lines create the plot shown at the right. data = RANDOMU(s,51)*15-5 upper = data + RANDOMU(s,51)*2 + 6 bottom = data - RANDOMU(s,51)*3 - 7 year = INDGEN(51) + 1950  p = PLOT(year, data, ...",t:"POLYGON"},"1128":{i:0.000268660474779542,u:"../Content/Reference Material/P/POLYLINE.htm",a:"The POLYLINE function plots a series of lines as an annotation to an existing IDL graphic. Example The following lines create the plot shown at the top of this topic. im = IMAGE(FILEPATH(\u0027muscle.jpg\u0027, $ SUBDIRECTORY=[\u0027examples\u0027,\u0027data\u0027])) line1 = POLYLINE([265,252], [100,55], /DATA, $ TARGET=im, ...",t:"POLYLINE"},"1129":{i:0.00014813153858035,u:"../Content/Reference Material/P/POLYWARP.htm",a:"The POLYWARP procedure performs polynomial spatial warping. Using least squares estimation, POLYWARP determines the coefficients Kx i,j and Ky (i,j) of the polynomial functions: Kx and Ky can be used as inputs P and Q to the built-in function POLY_2D. This coordinate transformation may be then used ...",t:"POLYWARP "},"1130":{i:0.000459220640846142,u:"../Content/Reference Material/P/POPD.htm",a:"The POPD procedure changes the current working directory to the directory saved on the top of the directory stack maintained by the PUSHD and POPD procedures. This top entry is then removed from the stack. Attempting to pop a directory when the stack is empty causes a warning message to be printed. ...",t:"POPD "},"1131":{i:0.000286936612117367,u:"../Content/Reference Material/P/POWELL.htm",a:"The POWELL procedure minimizes a user-written function Func of two or more independent variables using the Powell method. POWELL does not require a user-supplied analytic gradient. POWELL is based on the routine powell described in section 10.5 of Numerical Recipes in C: The Art of Scientific ...",t:"POWELL "},"1132":{i:0.00174393934101674,u:"../Content/Reference Material/P/PREF_COMMIT.htm",a:"The PREF_SET procedure is used to set new values for IDL preferences. However, a preference value set in this way does not immediately take effect. Rather, it is put into a pending state, in which IDL remembers the change, but does not use it. To make a pending preference value take effect, IDL must ...",t:"PREF_COMMIT"},"1133":{i:0.00153959356984442,u:"../Content/Reference Material/P/PREF_GET.htm",a:"The PREF_GET function returns information about IDL preferences. It can return any of the following information: The current effective value for a given preference (specified by PrefName) The names of all the preferences (specified by / NAMES_ALL ) The number of pending preferences (specified by / ...",t:"PREF_GET"},"1134":{i:0.00244147314331332,u:"../Content/Reference Material/P/PREF_SET.htm",a:"The PREF_SET procedure is used to set new values for IDL preferences. Once committed, these values are written to the user’s IDL preference file and persist between IDL sessions. For more information on committing preference values, see the discussion of the COMMIT keyword below, as well as the ...",t:"PREF_SET"},"1135":{i:0.000320014506919569,u:"../Content/Reference Material/P/PREWITT.htm",a:"The PREWITT function returns an approximation to the Prewitt edge enhancement operator for images, where ( j , k ) are the coordinates of each pixel F jk in the Image . This is equivalent to a convolution using the following masks: All of the edge points in the result are set to zero. Examples If ...",t:"PREWITT "},"1136":{i:5.52317565356281E-05,u:"../Content/Reference Material/P/PRIMES.htm",a:"The PRIMES function computes the first K prime numbers. This routine is written in the IDL language. Its source code can be found in the file primes.pro in the lib subdirectory of the IDL distribution. Examples To compute the first 25 prime numbers: PRINT, PRIMES(25) IDL prints: 2 ...",t:"PRIMES "},"1137":{i:0.000839950178839353,u:"../Content/Reference Material/P/PRINT.htm",a:"The two PRINT procedures perform formatted output. PRINT performs output to the standard output stream (IDL file unit -1), while PRINTF requires a file unit to be explicitly specified. IDL uses the standard I/O function sprintf to do its formatting. Different platforms implement this function in ...",t:"PRINT/PRINTF "},"1138":{i:0.000317053231555676,u:"../Content/Reference Material/P/PRINTD.htm",a:"The PRINTD procedure prints the contents of the directory stack maintained by the PUSHD and POPD procedures. The contents of the directory stack are listed on the default output device. The common block DIR_STACK is used to store the directory stack. This routine is written in the IDL language. Its ...",t:"PRINTD "},"1139":{i:5.79563159634795E-05,u:"../Content/Reference Material/P/PRO.htm",a:"The PRO statement defines an IDL procedure. Examples The following example demonstrates the use of arguments in a PRO statement: PRO ADD, A, B PRINT, \u0027A = \u0027, A PRINT, \u0027B = \u0027, B A = A + B PRINT, \u0027A = \u0027, A END PRO MYPROCEDURE X = 5 ; Call the ADD procedure: ADD, 3, X END MYPROCEDURE  After you run ...",t:"PRO"},"1140":{i:0.000131664569048483,u:"../Content/Reference Material/P/PRODUCT.htm",a:"The PRODUCT function returns the product of elements within an array. The product of the array elements over a given dimension is returned if the Dimension argument is present. Because the product can easily overflow, the product is computed using double-precision arithmetic and the Result is double ...",t:"PRODUCT"},"1141":{i:0.000368619555683823,u:"../Content/Reference Material/P/PROFILE.htm",a:"The PROFILE function extracts a profile from an image and returns the values of the image along the profile line marked by the user. This routine is written in the IDL language. Its source code can be found in the file profile.pro in the lib subdirectory of the IDL distribution. Using PROFILE To ...",t:"PROFILE "},"1142":{i:0.000466651609655903,u:"../Content/Reference Material/P/PROFILER.htm",a:"The PROFILER procedure allows you to access the IDL Code Profiler. The IDL Code Profiler helps you analyze the performance of your applications. You can easily monitor the calling frequency and execution time for procedures and functions. Example ; Be sure that the routines you want to profile are ...",t:"PROFILER "},"1143":{i:0.000369235053367596,u:"../Content/Reference Material/P/PROFILES_Procedure.htm",a:"The PROFILES procedure interactively draws row or column profiles of an image in a separate window. A new window is created and the mouse location in the original window is used to plot profiles in the new window. This routine is written in the IDL language. Its source code can be found in the file ...",t:"PROFILES Procedure"},"1144":{i:0.000150120351407839,u:"../Content/Reference Material/P/PROJECT_VOL_Procedure.htm",a:"The PROJECT_VOL function returns a two-dimensional image that is the projection of a 3-D volume of data onto a plane (similar to an X-ray). The returned image is a translucent rendering of the volume (the highest data values within the volume show up as the brightest regions in the returned image). ...",t:"PROJECT_VOL Procedure"},"1145":{i:0.00166733471576808,u:"../Content/Reference Material/P/PS_SHOW_FONTS.htm",a:"The PS_SHOW_FONTS procedure displays all the PostScript fonts that IDL knows about, with both the StandardAdobe and ISOLatin1 encodings. Each display takes a separate page, and each character in each font is shown with its character index. A PostScript file is produced, one page per font/mapping ...",t:"PS_SHOW_FONTS "},"1146":{i:0.000933060417164237,u:"../Content/Reference Material/P/PSAFM.htm",a:"The PSAFM procedure takes an Adobe Font Metrics file as input and generates a new AFM file in the format that IDL likes. This new file differs from the original in the following ways: Information not used by IDL is removed. AFM files with the AdobeStandardEncoding are supplemented with an ...",t:"PSAFM "},"1147":{i:0.00100394526285704,u:"../Content/Reference Material/P/PSEUDO.htm",a:"The PSEUDO procedure creates a pseudo-color table based on the LHB (Lightness, Hue, and Brightness) system and loads it. The pseudo-color mapping used is generated by first translating from the LHB coordinate system to the LAB coordinate system, finding N colors spread out along a helix that spans ...",t:"PSEUDO "},"1148":{i:0.00067793198005372,u:"../Content/Reference Material/P/PTR_FREE.htm",a:"The PTR_FREE procedure destroys the heap variables pointed at by its pointer arguments. Any memory used by the heap variable is released, and the variable ceases to exist. No change is made to the arguments themselves and all pointers to the destroyed variables continue to exist. Such pointers are ...",t:"PTR_FREE "},"1149":{i:0.000631545001794908,u:"../Content/Reference Material/P/PTR_NEW.htm",a:"The PTR_NEW function provides the primary mechanism for creating heap variables. Syntax Result = PTR_NEW( [ InitExpr ] [, / ALLOCATE_HEAP ] [, / NO_COPY ] ) Return Value It returns a pointer to the created variable. Arguments InitExpr If InitExpr is provided, PTR_NEW uses it to initialize the newly ...",t:"PTR_NEW"},"1150":{i:0.000610513717099028,u:"../Content/Reference Material/P/PTR_VALID.htm",a:"The PTR_VALID function verifies the validity of its pointer arguments, or alternatively returns a vector of pointers to all the existing valid pointer heap variables. Examples To determine if a given pointer refers to a valid heap variable: IF (PTR_VALID(p)) THEN … To destroy all existing pointer ...",t:"PTR_VALID"},"1151":{i:0.000620372685590919,u:"../Content/Reference Material/P/PTRARR.htm",a:"The PTRARR function returns a pointer vector or array. The individual elements of the array are set to the Null Pointer. Example Create P, a 3 element by 3 element pointer array with each element containing the Null Pointer by entering: P = PTRARR(3, 3) Syntax Result = PTRARR( D 1 , ... …, D 8 [, / ...",t:"PTRARR"},"1152":{i:0.000459220640846142,u:"../Content/Reference Material/P/PUSHD.htm",a:"The PUSHD procedure pushes a directory onto the top of the directory stack maintained by the PUSHD and POPD procedures. The name of the current directory is pushed onto the directory stack. This directory becomes the next directory used by POPD. IDL changes directories to the one specified by the ...",t:"PUSHD "},"1153":{i:5.50327019655568E-05,u:"../Content/Reference Material/Q/Q_list.htm",a:"Q Routines ",t:"Q Routines"},"1154":{i:0.000547962607182408,u:"../Content/Reference Material/Q/QGRID3.htm",a:"The QGRID3 function linearly interpolates the dependent variable values to points in a regularly sampled volume. Its inputs are a triangulation of scattered data points in three dimensions, and the value of a dependent variable for each point. QGRID3 accepts complex input but only utilizes the real ...",t:"QGRID3 "},"1155":{i:0.000547962607182408,u:"../Content/Reference Material/Q/QHULL.htm",a:"The QHULL procedure constructs convex hulls, Delaunay triangulations, and Voronoi diagrams of a set of points of 2-dimensions or higher. It uses and is based on the program QHULL, which is described in Barber, Dobkin and Huhdanpaa, “The Quickhull Algorithm for Convex Hulls,” ACM Transactions on ...",t:"QHULL "},"1156":{i:0.000665125358241829,u:"../Content/Reference Material/Q/QROMB.htm",a:"The QROMB function evaluates the integral of a function over the closed interval [ A, B ] using Romberg integration. Examples For more information on using QROMB, see Additional Examples . Example 1 To integrate the CUBIC function (listed above) over the interval [0, 3] and print the result: PRINT, ...",t:"QROMB "},"1157":{i:0.000603078684221536,u:"../Content/Reference Material/Q/QROMO.htm",a:"The QROMO function evaluates the integral of a function over the open interval ( A, B ) using a modified Romberg’s method. Examples Consider the following function: FUNCTION hyper, X RETURN, 1.0 / X^4 END This example integrates the HYPER function over the open interval (2, ∞) and prints the result: ...",t:"QROMO "},"1158":{i:0.000603078684221536,u:"../Content/Reference Material/Q/QSIMP.htm",a:"The QSIMP function performs numerical integration of a function over the closed interval [ A, B ] using Simpson’s rule. Examples To integrate the SIMPSON function (listed above) over the interval [0, π/2] and print the result: ; Define lower limit of integration: A = 0.0 ; Define upper limit of ...",t:"QSIMP "},"1159":{i:0.00180342976252581,u:"../Content/Reference Material/Q/QUERY___Routines.htm",a:"Return Values | General Query * Routine Info Structures | QUERY_TIFF-Specific Routine Info Structures Query ro utines allow users to obtain information about an image or ASCII file without having to read the file. The following QUERY_* routines are available in IDL: QUERY_BMP QUERY_PICT QUERY_DICOM ...",t:"QUERY_* Routines"},"1160":{i:0.000489267775531148,u:"../Content/Reference Material/Q/QUERY_ASCII.htm",a:"The QUERY_ASCII function tests a file for compatibility with READ_ASCII and returns an optional structure containing information about the file. This routine is written in the IDL language. Its source code can be found in the file query_ascii.pro in the lib subdirectory of the IDL distribution. ...",t:"QUERY_ASCII"},"1161":{i:0.000308792433658291,u:"../Content/Reference Material/Q/QUERY_BMP.htm",a:"QUERY_BMP is a method of obtaining information about a BMP image file without having to read the file. See QUERY_* Routines for more information. Syntax Result = QUERY_BMP( Filename [, Info ] ) Return Value This routine returns a long with the value of 1 (one) if the query was successful (and the ...",t:"QUERY_BMP "},"1162":{i:0.000222756457381439,u:"../Content/Reference Material/Q/QUERY_CSV.htm",a:"The QUERY_CSV function tests a file or URL for compatibility with READ_CSV and returns an optional structure containing information about the file. This routine is written in the IDL language. Its source code can be found in the file query_csv.pro in the lib subdirectory of the IDL distribution. ...",t:"QUERY_CSV"},"1163":{i:0.000291696789149953,u:"../Content/Reference Material/Q/QUERY_DICOM.htm",a:"The QUERY_DICOM function tests a file for compatibility with READ_DICOM and returns an optional structure containing information about images in the DICOM file. This function supports cases in which a blank DICOM tag is supplied. This routine is written in the IDL language. Its source code can be ...",t:"QUERY_DICOM "},});