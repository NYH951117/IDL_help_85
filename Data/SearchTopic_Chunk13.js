define({"940":{i:0.000647670637648474,u:"../Content/Reference Material/L/LA_LUDC.htm",a:"The LA_LUDC procedure computes the LU decomposition of an n -column by m -row array as: A = P L U where P is a permutation matrix, L is lower trapezoidal with unit diagonal elements (lower triangular if n = m ), and U is upper trapezoidal (upper triangular if n = m ). LA_LUDC is based on the ...",t:"LA_LUDC "},"941":{i:0.000442671603157671,u:"../Content/Reference Material/L/LA_LUMPROVE.htm",a:"The LA_LUMPROVE function uses LU decomposition to improve the solution to a system of linear equations, AX = B , and provides optional error bounds and backward error estimates. The LA_LUMPROVE function may also be used to improve the solutions for multiple systems of linear equations, with each ...",t:"LA_LUMPROVE "},"942":{i:0.000465800837045784,u:"../Content/Reference Material/L/LA_LUSOL.htm",a:"The LA_LUSOL function is used in conjunction with the LA_LUDC procedure to solve a set of n linear equations in n unknowns, AX = B . The parameter A is not the original array, but its LU decomposition, created by the routine LA_LUDC. The LA_LUSOL function may also be used to solve for multiple ...",t:"LA_LUSOL "},"943":{i:0.000197470034434268,u:"../Content/Reference Material/L/LA_SVD.htm",a:"The LA_SVD procedure computes the singular value decomposition (SVD) of an n -columns by m -row array as the product of orthogonal and diagonal arrays: A is real: A = U S V T A is complex: A = U S V H where U is an orthogonal array containing the left singular vectors, S is a diagonal array ...",t:"LA_SVD "},"944":{i:0.000305302314657065,u:"../Content/Reference Material/L/LA_TRIDC.htm",a:"The LA_TRIDC procedure computes the LU decomposition of a tridiagonal ( n x n ) array as Array = L U , where L is a product of permutation and unit lower bidiagonal arrays, and U is upper triangular with nonzero elements only in the main diagonal and the first two superdiagonals. LA_TRIDC is based ...",t:"LA_TRIDC "},"945":{i:0.000305302314657065,u:"../Content/Reference Material/L/LA_TRIMPROVE.htm",a:"The LA_TRIMPROVE function improves the solution to a system of linear equations with a tridiagonal array, AX = B , and provides optional error bounds and backward error estimates. The LA_TRIMPROVE function may also be used to improve the solutions for multiple systems of linear equations, with each ...",t:"LA_TRIMPROVE "},"946":{i:0.000347248525253547,u:"../Content/Reference Material/L/LA_TRIQL.htm",a:"The LA_TRIQL procedure uses the QL and QR variants of the implicitly-shifted QR algorithm to compute the eigenvalues and eigenvectors of a symmetric tridiagonal array. The LA_TRIRED routine can be used to reduce a real symmetric (or complex Hermitian) array to tridiagonal form suitable for input to ...",t:"LA_TRIQL "},"947":{i:0.000343236507471976,u:"../Content/Reference Material/L/LA_TRIRED.htm",a:"The LA_TRIRED procedure reduces a real symmetric or complex Hermitian array to real tridiagonal form T . If the array is real symmetric then the decomposition is A = Q T Q T , where Q is orthogonal. If the array is complex Hermitian then the decomposition is A = Q T Q H , where Q is unitary. The ...",t:"LA_TRIRED"},"948":{i:0.000362675756061926,u:"../Content/Reference Material/L/LA_TRISOL.htm",a:"The LA_TRISOL function is used in conjunction with the LA_TRIDC procedure to solve a set of n linear equations in n unknowns, AX = B , where A is a tridiagonal array. The parameter A is input not as the original array, but as its LU decomposition, created by the routine LA_TRIDC. The LA_TRISOL ...",t:"LA_TRISOL"},"949":{i:0.000168576872793012,u:"../Content/Reference Material/L/LABEL_DATE.htm",a:"The LABEL_DATE function can be used, in conjunction with the [XYZ]TICKFORMAT keywords to IDL plotting routines, to easily label axes with dates and times. This routine is written in the IDL language. Its source code can be found in the file label_date.pro in the lib subdirectory of the IDL ...",t:"LABEL_DATE"},"950":{i:0.000119367898406075,u:"../Content/Reference Material/L/LABEL_REGION.htm",a:"The LABEL_REGION function consecutively labels all of the regions, or blobs, of a bi-level image with a unique region index. This process is sometimes called “blob coloring”. A region is a set of non-zero pixels within a neighborhood around the pixel under examination. The argument for LABEL_REGION ...",t:"LABEL_REGION "},"951":{i:0.000180329001357978,u:"../Content/Reference Material/L/LADFIT.htm",a:"The LADFIT function fits the paired data { xi , yi } to the linear model, y = A + Bx, using a “robust” least absolute deviation method. The figure below displays a two-dimensional distribution that is fitted to the model y = A + Bx, using a minimized Chi-square error criterion (left) and a “robust” ...",t:"LADFIT "},"952":{i:0.000368202697321914,u:"../Content/Reference Material/L/LAGUERRE.htm",a:"The LAGUERRE function returns the value of the associated Laguerre polynomial . The associated Laguerre polynomials are solutions to the differential equation: with orthogonality constraint: Laguerre polynomials are used in quantum mechanics, for example, where the wave function for the hydrogen ...",t:"LAGUERRE "},"953":{i:0.000583955986259849,u:"../Content/Reference Material/L/LAMBDA.htm",a:"The LAMBDA function creates small, inline functions that can be passed around as IDL strings. These Lambda routines can be used to make function calls, or used as inputs to the ::Filter , ::Map , and ::Reduce methods. You can use the LAMBDAP routine to create inline procedures instead of functions. ...",t:"LAMBDA"},"954":{i:0.000326870584889086,u:"../Content/Reference Material/L/LAMBDAP.htm",a:"The LAMBDAP function creates small, inline procedures that can be passed around as IDL strings. These Lambda procedures can be used to make procedure calls, or used as inputs to other IDL routines that require user procedures. Examples Here we create a multi-statement Lambda procedure, and pass it ...",t:"LAMBDAP"},"955":{i:8.6972837918175E-05,u:"../Content/Reference Material/L/LAMBERTW.htm",a:"The LAMBERTW function returns the value W(z) of the Lambert W function, also known as the omega function or product logarithm function. The defining equation is given by: z = W ( z ) e W ( z ) where z is any complex number. Because the equation has an infinite number of solutions for each z , there ...",t:"LAMBERTW"},"956":{i:0.000419029323990968,u:"../Content/Reference Material/L/LAPLACIAN.htm",a:"The LAPLACIAN function applies a Laplacian operator to a 2D image array to generate an array containing difference values that represent edges in the original image. Examples The LAPLACIAN function can be used to sharpen an image.  ; Read an image. file = FILEPATH(\u0027ctbone157.jpg\u0027, ...",t:"LAPLACIAN"},"957":{i:0.00034563815556188,u:"../Content/Reference Material/L/LEAST_SQUARES_FILTER.htm",a:"The LEAST_SQUARES_FILTER function reduces degradation and noise in an image based on the mean and variance of the degradation and noise. This is also known as a constrained least squares filter . If the degraded image is modeled in the spatial domain by the constrained least squares filter seeks to ...",t:"LEAST_SQUARES_FILTER"},"958":{i:0.000341930270985796,u:"../Content/Reference Material/L/LEEFILT.htm",a:"The LEEFILT function performs the Lee filter algorithm on an image array using a box of size 2 N +1. This function can also be used on vectors. The Lee technique smooths additive image noise by generating statistics in a local neighborhood and comparing them to the expected values. This routine is ...",t:"LEEFILT "},"959":{i:0.000297840951543396,u:"../Content/Reference Material/L/LEGEND.htm",a:"The LEGEND function adds a legend to 2D or 3D line plots, bar plots, contour plots, or vector plots. By default, for line plots, bar plots, and contour plots the NAME property of the graphic item is used for the label within the legend. By default, for vector plots the mean magnitude of the vector ...",t:"LEGEND"},"960":{i:0.000368202697321914,u:"../Content/Reference Material/L/LEGENDRE.htm",a:"The LEGENDRE function returns the value of the associated Legendre polynomial . The associated Legendre functions are solutions to the differential equation: with orthogonality constraints: The Legendre polynomials are the solutions to the Legendre equation with m = 0. For positive m , the ...",t:"LEGENDRE "},"961":{i:0.000402739410769806,u:"../Content/Reference Material/L/LINBCG.htm",a:"The LINBCG function is used in conjunction with SPRSIN to solve a set of n sparse linear equations with n unknowns using the iterative biconjugate gradient method. LINBCG is based on the routine linbcg described in section 2.7 of Numerical Recipes in C: The Art of Scientific Computing (Second ...",t:"LINBCG "},"962":{i:7.41112348156038E-05,u:"../Content/Reference Material/L/LINDGEN.htm",a:"The LINDGEN function creates a longword integer array with the specified dimensions. Each element of the array is set to the value of its one-dimensional subscript. For example, L=LINDGEN(100) will create a 100-element, 32-bit integer array with the values 0, 1, ..., 99. Syntax Result = LINDGEN ( D ...",t:"LINDGEN"},"963":{i:0.000469635871382052,u:"../Content/Reference Material/L/LINFIT.htm",a:"The LINFIT function fits the paired data { x i , y i } to the linear model, y = A + Bx, by minimizing the chi-square error statistic. The chi-square error statistic is computed as LINFIT is based upon the “fit” and “gammq” routines from Numerical Recipes in C (Second Edition). See section 15.2 of ...",t:"LINFIT "},"964":{i:0.00051818923108706,u:"../Content/Reference Material/L/LINKIMAGE.htm",a:"The LINKIMAGE procedure merges routines written in other languages with IDL at runtime. Each call to LINKIMAGE defines a new system procedure or function by specifying the routine’s name, the name of the file containing the code, and the entry point name. The name of your routine is added to IDL’s ...",t:"LINKIMAGE "},"965":{i:0.000301392866098854,u:"../Content/Reference Material/L/LIST.htm",a:"The LIST function creates a new list. A list is a compound data type that contains elements of different data types, including any mixture of scalars, arrays, structures, pointers, object references, and other lists or hashes . Lists have the following properties: Elements in a list are ordered, and ...",t:"LIST"},"966":{i:0.00038636589355683,u:"../Content/Reference Material/L/LL_ARC_DISTANCE.htm",a:"The LL_ARC_DISTANCE function returns a two-element vector containing the longitude and latitude [lon, lat] of a point given arc distance (-π ≤ Arc_Dist ≤ π), and azimuth ( Az ), from a specified location Lon_lat0 . Values are in radians unless the keyword DEGREES is set. This routine is written in ...",t:"LL_ARC_DISTANCE "},"967":{i:0.000436486869119816,u:"../Content/Reference Material/L/LMFIT.htm",a:"The LMFIT function does a non-linear least squares fit to a function with an arbitrary number of parameters. LMFIT uses the Levenberg-Marquardt algorithm, which combines the steepest descent and inverse-Hessian function fitting methods. The function may be any non-linear function. Iterations are ...",t:"LMFIT "},"968":{i:0.000371206858647425,u:"../Content/Reference Material/L/LMGR.htm",a:"The LMGR function tests whether a particular licensing mode is in effect. Different licensing modes are specified by keyword; see the “Keywords” section below for a description of each licensing mode. The LMGR function can also force IDL into time demo mode or report the LMHostid number for the ...",t:"LMGR "},"969":{i:0.000197062262804783,u:"../Content/Reference Material/L/LNGAMMA.htm",a:"The LNGAMMA function returns the logarithm of the gamma function of Z . Examples To find the logarithm of the gamma function of 0.5 and store the result in variable A, enter: A = LNGAMMA(0.5) Syntax Result = LNGAMMA( Z ) Return Value For negative integers, LNGAMMA returns the correct value of ...",t:"LNGAMMA "},"970":{i:6.78717120574662E-05,u:"../Content/Reference Material/L/LNP_TEST.htm",a:"The LNP_TEST function computes the Lomb Normalized Periodogram of two sample populations X and Y and tests the hypothesis that the populations represent a significant periodic signal against the hypothesis that they represent random noise. LNP_TEST is based on the routine fasper described in section ...",t:"LNP_TEST "},"971":{i:0.000126924201637177,u:"../Content/Reference Material/L/LOADCT_Procedure.htm",a:"The LOADCT procedure loads one of the predefined IDL color tables . These color tables are defined in the file colors1.tbl , located in the \\resource\\colors subdirectory of the main IDL directory, unless the FILE keyword is specified. The selected colortable is loaded into the COLORS common block as ...",t:"LOADCT"},"972":{i:0.000465799769810282,u:"../Content/Reference Material/L/LOCALE_GET.htm",a:"The LOCALE_GET function returns the current locale of the operating system. Syntax Result = LOCALE_GET( /LC_NUMERIC, /LC_TIME, /PROCESS ) Return Value Returns a string containing the current operating system locale. Arguments None Keywords LC_NUMERIC By default LOCALE_GET returns the LC_CTYPE ...",t:"LOCALE_GET "},"973":{i:0.000453348460255486,u:"../Content/Reference Material/L/LOCALE_SET.htm",a:"The LOCALE_SET procedure sets the current locale of the IDL process. The default locale for the IDL process is \"C\", which indicates the C programming language. Setting the locale to a different value may lead to unpredictable output and behavior, and is only recommended for special situations. ...",t:"LOCALE_SET "},"974":{i:0.000560515164368003,u:"../Content/Reference Material/L/LOGICAL_AND.htm",a:"The LOGICAL_AND function performs a logical AND operation on its arguments. It returns True (1) if both of its arguments are non-zero (non-NULL for strings and heap variables), or False (0) otherwise. The LOGICAL_AND function is similar to the AND operator, except that it performs a logical “and” ...",t:"LOGICAL_AND"},"975":{i:0.000560515164368003,u:"../Content/Reference Material/L/LOGICAL_OR.htm",a:"The LOGICAL_OR function performs a logical OR operation on its arguments. It returns True (1) if either of its arguments are non-zero (non-NULL for strings and heap variables), and False (0) otherwise. The LOGICAL_OR function is similar to the OR operator, except that it performs a logical “or” ...",t:"LOGICAL_OR"},"976":{i:0.000673503474074963,u:"../Content/Reference Material/L/LOGICAL_TRUE.htm",a:"The LOGICAL_TRUE function returns True (1) if its arguments are non-zero (non-NULL for strings and heap variables), and False (0) otherwise. For a given argument, the value returned by LOGICAL_TRUE is the opposite of the value returned by the ~ operator. Example At the IDL Command Line, enter: ...",t:"LOGICAL_TRUE"},"977":{i:0.00051748844317432,u:"../Content/Reference Material/L/LON64ARR.htm",a:"The LON64ARR function returns a 64-bit integer vector or array. Examples To create L, a 100-element, 64-bit vector with each element set to 0, enter: L = LON64ARR(100) Syntax Result = LON64ARR( D 1 [ , ... , D 8 ] [, / NOZERO ] ) Return Value Returns a 64-bit array of the specified dimensions. ...",t:"LON64ARR "},"978":{i:0.00051748844317432,u:"../Content/Reference Material/L/LONARR.htm",a:"The LONARR function returns a longword integer vector or array. Examples To create L, a 100-element, longword vector with each element set to 0, enter: L = LONARR(100) Syntax Result = LONARR( D 1 [ , ... , D 8 ] [, / NOZERO ] ) Return Value Returns a long array of the specified dimensions. Arguments ...",t:"LONARR "},"979":{i:0.000512689969765814,u:"../Content/Reference Material/L/LONG.htm",a:"The LONG function returns a result equal to Expression converted to a longword integer type. Examples If A contains the floating-point value 32000.0, it can be converted to a longword integer and stored in the variable B by entering: B = LONG(A) Syntax Result = LONG( Expression[ , Offset [ , D 1 [ , ...",t:"LONG "},"980":{i:0.000447212421028512,u:"../Content/Reference Material/L/LONG64.htm",a:"The LONG64 function returns a result equal to Expression converted to 64-bit integer type. Examples If A contains the floating-point value 32000.0, it can converted to a 64-bit integer and stored in the variable B by entering: B = LONG64(A) Syntax Result = LONG64( Expression[ , Offset [ , D 1 [ , ...",t:"LONG64 "},"981":{i:7.01355756377808E-05,u:"../Content/Reference Material/L/LSODE.htm",a:"The LSODE function uses adaptive numerical methods to advance a solution to a system of ordinary differential equations one time-step H, given values for the variables Y and X . Examples To integrate the example system of differential equations: FUNCTION spring_friction, t, xv v = xv[1] x = xv[0] ...",t:"LSODE "},"982":{i:0.00046292593022444,u:"../Content/Reference Material/L/LU_COMPLEX.htm",a:"The LU_COMPLEX function solves an n by n complex linear system Az = b using LU decomposition. The result is an n -element complex vector z . Alternatively, LU_COMPLEX computes the generalized inverse of an n by n complex array. This routine is written in the IDL language. Its source code can be ...",t:"LU_COMPLEX "},"983":{i:0.000456573185667919,u:"../Content/Reference Material/L/LUDC.htm",a:"The LUDC procedure replaces an n by n array, A , with the LU decomposition of a row-wise permutation of itself. If you are working with complex inputs, use the LA_LUDC procedure instead. Examples See the description of LUSOL for an example using this procedure. Syntax LUDC, A , Index [, / COLUMN ] ...",t:"LUDC "},"984":{i:0.00018958571216611,u:"../Content/Reference Material/L/LUMPROVE.htm",a:"The LUMPROVE function uses LU decomposition to iteratively improve an approximate solution X of a set of n linear equations in n unknowns Ax = b. If you are working with complex inputs, use the LA_LUMPROVE function instead. Examples This example uses LUMPROVE to improve an approximate solution X to ...",t:"LUMPROVE "},"985":{i:0.000671472899229717,u:"../Content/Reference Material/L/LUSOL.htm",a:"The LUSOL function is used in conjunction with the LUDC procedure to solve a set of n linear equations in n unknowns Ax = b. The parameter A is input not as the original array, but as its LU decomposition, created by the routine LUDC. If you are working with complex inputs, use the LA_LUSOL function ...",t:"LUSOL "},"986":{i:5.50327019655568E-05,u:"../Content/Reference Material/M/M_list.htm",a:"M Routines ",t:"M Routines"},"987":{i:0.000636841375163091,u:"../Content/Reference Material/M/M_CORRELATE.htm",a:"The M_CORRELATE function computes the multiple correlation coefficient of a dependent variable and two or more independent variables. This routine is written in the IDL language. Its source code can be found in the file m_correlate.pro in the lib subdirectory of the IDL distribution. Example First, ...",t:"M_CORRELATE "},"988":{i:0.00053782797833819,u:"../Content/Reference Material/M/MACHAR.htm",a:"The MACHAR function determines and returns machine-specific parameters affecting floating-point arithmetic. Information is returned in the form of a structure with the fields listed in the “Return Value” section. MACHAR is based on the routine machar described in section 20.1 of Numerical Recipes in ...",t:"MACHAR "},"989":{i:0.000578387733237007,u:"../Content/Reference Material/M/MAKE_ARRAY.htm",a:"The MAKE_ARRAY function enables you to dynamically create an array whose characteristics are not known until run time. Examples To create a 3-element by 4-element integer array with each element set to the value 5, enter: M = MAKE_ARRAY(3, 4, /INTEGER, VALUE = 5) Syntax Result = MAKE_ARRAY ( [ D 1 ...",t:"MAKE_ARRAY "},"990":{i:0.00324702386510324,u:"../Content/Reference Material/M/MAKE_DLL.htm",a:"The MAKE_DLL procedure builds a sharable library from C language code which is suitable for use by IDL’s dynamic linking features such as CALL_EXTERNAL,  LINKIMAGE, and dynamically loadable modules (DLMs). MAKE_DLL reduces the complexity of building sharable libraries by providing a stable ...",t:"MAKE_DLL "},"991":{i:0.000401091847247231,u:"../Content/Reference Material/M/MAKE_RT.htm",a:"The MAKE_RT procedure creates a stand-alone IDL runtime distribution for one or more platforms. In addition to the IDL binary and resource files required to execute an IDL program in runtime mode, MAKE_RT creates platform-specific launching scripts that allow an end-user to easily launch a runtime ...",t:"MAKE_RT"},"992":{i:0.00061251837500935,u:"../Content/Reference Material/M/MAP.htm",a:"The MAP function displays map data in a graphics window. Example The following lines create the map shown at the top of this topic. ; Set up map projection, draw a grid map = MAP(\u0027Hotine Oblique Mercator\u0027, $ ELLIPSOID=\u0027GRS1980\u0027, $ MARGIN=0.1, $ MERCATOR_SCALE=0.9996d, $ LIMIT=[40, -95, 50, -75], $ ...",t:"MAP"},"993":{i:0.000215252447574942,u:"../Content/Reference Material/M/MAPCONTINENTS.htm",a:"The MAPCONTINENTS function overlays map boundaries on a map in a graphics window. By default the function draws the continental outlines. Example The following lines create the map shown at the top of this topic. ; Set up the map projection map = MAP(\u0027Orthographic\u0027, $ LIMIT = [30, -150, 60, -90], $ ...",t:"MAPCONTINENTS"},"994":{i:0.000344718321626406,u:"../Content/Reference Material/M/MAPGRID.htm",a:"The MAPGRID function plots a map graticule (or grid) onto an existing IDL map graphic. Example The following lines create the graphic shown at the top of this topic. ; Create a map projection with a grid. map = MAP(\u0027Mercator\u0027, LIMIT=[35,-15,60,35], $ LONGITUDE_MIN=-15, LONGITUDE_MAX=35, $ FILL_COLOR ...",t:"MAPGRID"},"995":{i:7.3595334355581E-05,u:"../Content/Reference Material/M/MAP_2POINTS.htm",a:"The MAP_2POINTS function returns parameters such as distance, azimuth, and path relating to the great circle or rhumb line connecting two points on a sphere. This routine is written in the IDL language. Its source code can be found in the file map_2points.pro in the lib subdirectory of the IDL ...",t:"MAP_2POINTS "},"996":{i:0.000190394406763016,u:"../Content/Reference Material/M/MAP_CONTINENTS_Procedure.htm",a:"Please see the MAPCONTINENTS function, which replicates the functionality of this routine and offers an interactive interface. The MAP_CONTINENTS procedure draws continental boundaries, filled continents, political boundaries, coastlines, and/or rivers, over a map projection. Outlines can be drawn ...",t:"MAP_CONTINENTS Procedure"},"997":{i:0.000132785711880531,u:"../Content/Reference Material/M/MAP_GRID_Procedure.htm",a:"Please see the MAPGRID function, which replicates the functionality of this routine and offers an interactive interface. The MAP_GRID procedure draws the graticule of parallels and meridians (grid lines) over a map projection. The MAP_STRUCTURE keyword may be used to draw directly to UV (Cartesian) ...",t:"MAP_GRID Procedure"},"998":{i:0.000160468306069612,u:"../Content/Reference Material/M/MAP_IMAGE.htm",a:"The MAP_IMAGE function warps an image (or other dataset) to a Direct Graphics map projection. This function provides an easy method for displaying geographical data as an image on a map. The MAP_SET or MAP_PROJ_INIT procedures should be called prior to calling MAP_IMAGE. MAP_IMAGE works in image ...",t:"MAP_IMAGE"},"999":{i:0.000132785711880531,u:"../Content/Reference Material/M/MAP_PATCH.htm",a:"The MAP_PATCH function warps an image (or other dataset) to the current map projection. Mapping coordinates should be setup via a call to MAP_SET before using MAP_PATCH. MAP_PATCH works in object (data) space. It divides the input data set, Image_Orig , into triangular patches, either directly from ...",t:"MAP_PATCH "},"1000":{i:0.000473128958628857,u:"../Content/Reference Material/M/MAP_PROJ_FORWARD.htm",a:"The MAP_PROJ_FORWARD function transforms map coordinates from longitude and latitude to Cartesian (x, y) coordinates, using either the !MAP system variable or a supplied map projection structure created by MAP_PROJ_INIT . Example The example map_proj_forward_doc.pro creates a latitude and longitude ...",t:"MAP_PROJ_FORWARD"},"1001":{i:0.000202283290498079,u:"../Content/Reference Material/M/MAP_PROJ_IMAGE.htm",a:"The MAP_PROJ_IMAGE function warps an image (or other 2-dimensional dataset) from geographic coordinates (longitude and latitude) to a specified map projection. Pass in the result from MAP_PROJ_INIT using this function’s MAP_STRUCTURE keyword to set up the desired map projection. Optionally, the ...",t:"MAP_PROJ_IMAGE"},"1002":{i:0.000100793645942812,u:"../Content/Reference Material/M/MAP_PROJ_INFO_Procedure.htm",a:"The MAP_PROJ_INFO procedure returns information about the current map and/or the available projections. The MAP_PROJ_INFO procedure is compiled along with the MAP_SET procedure. You must call the MAP_SET Procedure procedure to set up mapping parameters before calling MAP_PROJ_INFO. This routine is ...",t:"MAP_PROJ_INFO Procedure"},"1003":{i:0.000481504237953641,u:"../Content/Reference Material/M/MAP_PROJ_INIT.htm",a:"The MAP_PROJ_INIT function initializes a mapping projection (establishes the coordinate conversion mechanism for mapping points on a globe\u0027s surface to points on a plane), using either IDL\u0027s own map projections or map projections from the U.S. Geological Survey\u0027s General Cartographic Transformation ...",t:"MAP_PROJ_INIT "},"1004":{i:0.000422592989915606,u:"../Content/Reference Material/M/MAP_PROJ_INVERSE.htm",a:"The MAP_PROJ_INVERSE function transforms map coordinates from Cartesian (x, y) coordinates to longitude and latitude, using either the !MAP system variable or a supplied map projection variable created by MAP_PROJ_INIT . Syntax Result = MAP_PROJ_INVERSE ( X [, Y ] [, MAP_STRUCTURE = value ] [, / ...",t:"MAP_PROJ_INVERSE "},"1005":{i:0.000227973955543196,u:"../Content/Reference Material/M/MAP_SET_Procedure.htm",a:"Please see the MAP function, which replicates the functionality of this routine and offers an interactive interface. The MAP_SET procedure establishes the axis type and coordinate conversion mechanism for mapping points on the earth’s surface, expressed in latitude and longitude, to points on a ...",t:"MAP_SET Procedure"},"1006":{i:0.000664695086750392,u:"../Content/Reference Material/M/MATRIX_MULTIPLY.htm",a:"The MATRIX_MULTIPLY function calculates the IDL # operator of two (possibly transposed) arrays. The transpose operation (if desired) is done simultaneously with the multiplication, thus conserving memory and increasing the speed of the operation. If the arrays are not transposed, then ...",t:"MATRIX_MULTIPLY "},"1007":{i:0.000551100239316017,u:"../Content/Reference Material/M/MATRIX_POWER.htm",a:"The MATRIX_POWER function computes the product of a matrix with itself. For example, the fifth power of array A is A # A # A # A # A . Negative powers are computed using the matrix inverse of the positive power. Example Print an array to the one millionth power: array = [ [0.401d, 0.600d], $ ...",t:"MATRIX_POWER "},"1008":{i:0.000343648637480205,u:"../Content/Reference Material/M/MAX.htm",a:"The MAX function returns the value of the largest element of Array . Examples Example 1 This example prints the maximum value in an array, and the subscript of that value: ; Create a simple two-dimensional array: D = DIST(100) ; Print the maximum value in array D and its linear subscript: PRINT, ...",t:"MAX "},"1009":{i:0.000137239461984975,u:"../Content/Reference Material/M/MD_TEST.htm",a:"The MD_TEST function tests the hypothesis that a sample population is random against the hypothesis that it is not random. This two-tailed function is an extension of the “Runs Test for Randomness” and is often referred to as the Median Delta Test. This routine is written in the IDL language. Its ...",t:"MD_TEST "},"1010":{i:0.000357433692525937,u:"../Content/Reference Material/M/MEAN.htm",a:"The MEAN function computes the mean of a numeric vector. MEAN calls the IDL function MOMENT. Examples ; Define the n-element vector of sample data: x = [65, 63, 67, 64, 68, 62, 70, 66, 68, 67, 69, 71, 66, 65, 70] ; Compute the average: result = MEAN(x) ; Print the result: PRINT, result IDL prints: ...",t:"MEAN "},"1011":{i:0.000356549943187996,u:"../Content/Reference Material/M/MEANABSDEV.htm",a:"The MEANABSDEV function computes the mean absolute deviation of an n -element vector or array. This routine is written in the IDL language. Its source code can be found in the file meanabsdev.pro in the lib subdirectory of the IDL distribution. Examples ; Define an n-element vector: x = [1, 1, 1, 2, ...",t:"MEANABSDEV "},"1012":{i:0.000333523044897046,u:"../Content/Reference Material/M/MEAN_FILTER.htm",a:"The MEAN_FILTER function applies mean filter noise reduction on a one-channel image or a multi-channel (True Color) image. For each pixel in the image, the mean filter analyzes the neighboring pixels. The mean is computed for this neighborhood and the pixel is replaced with the mean value. This ...",t:"MEAN_FILTER"},"1013":{i:0.000363640199839939,u:"../Content/Reference Material/M/MEDIAN.htm",a:"The MEDIAN function computes the median value. In an ordered set of values, the median is a value with an equal number of values above and below it. Median smoothing replaces each point with the median of the one- or two-dimensional neighborhood of a given width. It is similar to smoothing with a ...",t:"MEDIAN "},"1014":{i:0.000110397794678779,u:"../Content/Reference Material/M/MEMORY.htm",a:"The MEMORY function returns information on the amount of dynamic memory currently in use by the IDL session if no keywords are set. If a keyword is set, MEMORY returns the specified quantity. This function reports the amount of memory used by IDL’s core process. It does not include memory that is ...",t:"MEMORY "},});