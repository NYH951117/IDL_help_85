define({"223":{i:5.52317565356281E-05,u:"../Content/Reference Material/D/DIAG_MATRIX.htm",a:"The DIAG_MATRIX function constructs a diagonal matrix from an input vector, or if given a matrix, then DIAG_MATRIX will extract a diagonal vector. Examples Create a tridiagonal matrix and extract the diagonal using the following program: PRO ExDiagMatrix ; Convert three input vectors to a ...",t:"DIAG_MATRIX"},"224":{i:0.000113107942242142,u:"../Content/Reference Material/D/DIALOG_COLORPICKER.htm",a:"The DIALOG_COLORPICKER function allows you to interactively select a color using a selection dialog. The basic dialog grid includes 64 standard colors. You can set custom and preferred colors using keywords. Examples Open the Select Color dialog. Type: result = DIALOG_COLORPICKER() This opens the ...",t:"DIALOG_COLORPICKER"},"225":{i:0.000290802747429935,u:"../Content/Reference Material/D/DIALOG_DBCONNECT.htm",a:"Use the DIALOG_DBCONNECT function to connect to the DBMS via the standard ODBC dialog boxes. You will be prompted for information required to connect to the desired database. Due to Motif library inconsistencies, this dialog may fail on SUN Solaris systems. Syntax status = DIALOG_DBCONNECT( DBobj [, ...",t:"DIALOG_DBCONNECT\n        "},"226":{i:0.000202313001731013,u:"../Content/Reference Material/D/DIALOG_MESSAGE.htm",a:"The DIALOG_MESSAGE function creates a modal (blocking) dialog box that can be used to display information to the user. The dialog must be dismissed, by clicking on one of its option buttons, before execution of the widget program can continue. This function differs from widgets in a number of ways. ...",t:"DIALOG_MESSAGE "},"227":{i:0.000192738781911407,u:"../Content/Reference Material/D/DIALOG_PICKFILE.htm",a:"The DIALOG_PICKFILE function allows you to interactively select a file, or multiple files, using the platform’s own native graphical file selection dialog. You can also enter the name of a file that does not exist (see the description of the WRITE keyword). When the DIRECTORY keyword is set, you can ...",t:"DIALOG_PICKFILE "},"228":{i:0.000723018721216367,u:"../Content/Reference Material/D/DIALOG_PRINTERSETUP.htm",a:"The DIALOG_PRINTERSETUP function opens a native dialog for setting the applicable properties for a particular printer. Syntax Result = DIALOG_PRINTERSETUP( [ PrintDestination ] [, DIALOG_PARENT = widget_id ] [, DISPLAY_NAME = string ] [, RESOURCE_NAME = string ] [, TITLE = string ] ) Return Value ...",t:"DIALOG_PRINTERSETUP "},"229":{i:0.000723018721216367,u:"../Content/Reference Material/D/DIALOG_PRINTJOB.htm",a:"The DIALOG_PRINTJOB function opens a native dialog that allows you to set parameters for a printing job (number of copies to print, for example). Syntax Result = DIALOG_PRINTJOB( [ PrintDestination ] [, DIALOG_PARENT = widget_id ] [, DISPLAY_NAME = string ] [, RESOURCE_NAME = string ] [, TITLE= ...",t:"DIALOG_PRINTJOB "},"230":{i:0.000462415960967256,u:"../Content/Reference Material/D/DIALOG_READ_IMAGE.htm",a:"The DIALOG_READ_IMAGE function is a graphical interface allowing the user to select an image file and read it into an IDL variable. A preview of the selected image is provided. The interface is created as a modal dialog with an optional parent widget. Syntax Result = DIALOG_READ_IMAGE ( [ Filename ] ...",t:"DIALOG_READ_IMAGE"},"231":{i:0.000462415960967256,u:"../Content/Reference Material/D/DIALOG_WRITE_IMAGE.htm",a:"The DIALOG_WRITE_IMAGE function is a graphical user interface allowing you to save an IDL array variable as an image file, selecting a location and image file type. The interface is created as a modal dialog with an optional parent widget. Syntax Result =DIALOG_WRITE_IMAGE ( Image [ , R , G , B] [, ...",t:"DIALOG_WRITE_IMAGE"},"232":{i:0.000203588083575361,u:"../Content/Reference Material/D/DICTIONARY.htm",a:"The DICTIONARY function creates a new dictionary. An IDL dictionary is a compound data type that contains key-value pairs of different data types including any mixture of scalars, arrays, structures, pointers, object references, lists , hashes , and other dictionaries. Unlike HASH , the keys in a ...",t:"DICTIONARY"},"233":{i:0.000335973723334328,u:"../Content/Reference Material/D/DIGITAL_FILTER.htm",a:"The DIGITAL_FILTER function returns the coefficients of a non-recursive, digital filter for evenly spaced data points. Frequencies are expressed in terms of the Nyquist frequency, 1/2T, where T is the time between data samples. Highpass, lowpass, bandpass and bandstop filters may be constructed with ...",t:"DIGITAL_FILTER "},"234":{i:0.000379069495324707,u:"../Content/Reference Material/D/DILATE.htm",a:"The DILATE function implements the morphologic dilation operator on both binary and grayscale images. See Using Dilate , below, for more information on this function. Examples Also see “Eroding and Dilating Image Objects” (Chapter 9, Image Processing in IDL ) in the help/pdf directory of your IDL ...",t:"DILATE "},"235":{i:0.000371981672842825,u:"../Content/Reference Material/D/DINDGEN.htm",a:"The DINDGEN function creates a double-precision, floating-point array with the specified dimensions. Each element of the array is set to the value of its one-dimensional subscript. For example, D=DINDGEN(100) will create a 100-element, double-precision, floating-point array with the values 0.0, 1.0, ...",t:"DINDGEN"},"236":{i:0.000370978903235253,u:"../Content/Reference Material/D/DISSOLVE.htm",a:"The DISSOLVE procedure provides a digital “dissolve” effect for images. The routine copies pixels from the image (arranged into square tiles) to the display in pseudo-random order. This routine is written in the IDL language. Its source code can be found in the file dissolve.pro in the lib ...",t:"DISSOLVE "},"237":{i:5.97634764335064E-05,u:"../Content/Reference Material/D/DIST.htm",a:"The DIST function creates an array in which each array element value is proportional to its frequency. This array may be used for a variety of purposes, including frequency-domain filtering. This routine is written in the IDL language. Its source code can be found in the file dist.pro in the lib ...",t:"DIST "},"238":{i:0.000530128605600052,u:"../Content/Reference Material/D/DISTANCE_MEASURE.htm",a:"The DISTANCE_MEASURE function computes the pairwise distance between a set of items or observations. The DISTANCE_MEASURE function is designed to be used with the CLUSTER_TREE function. This routine is written in the IDL language. Its source code can be found in the file distance_measure.pro in the ...",t:"DISTANCE_MEASURE"},"239":{i:0.000197421440491204,u:"../Content/Reference Material/D/DLM_LOAD.htm",a:"Normally, IDL system routines that reside in dynamically loadable modules (DLMs) are automatically loaded on demand when a routine from a DLM is called. The DLM_LOAD procedure can be used to explicitly cause the code within the .dll or .so file to be loaded. Examples Force the JPEG DLM to be loaded: ...",t:"DLM_LOAD"},"240":{i:9.69848053172445E-05,u:"../Content/Reference Material/D/DLM_REGISTER.htm",a:"The DLM_REGISTER procedure registers a Dynamically Loadable Module (DLM) in IDL that was not registered when starting IDL. This allows you to create DLMs using the MAKE_DLL procedure and register them in your current session without having to exit and restart IDL. Example Manually register and then ...",t:"DLM_REGISTER "},"241":{i:0.000489225125255381,u:"../Content/Reference Material/D/DOC_LIBRARY.htm",a:"The DOC_LIBRARY procedure extracts documentation headers from one or more IDL programs (procedures or functions). This command provides a standard interface to the operating-system specific DL_DOS and DL_UNIX procedures. The documentation header of the .pro file in question must have the following ...",t:"DOC_LIBRARY "},"242":{i:0.000515297002929712,u:"../Content/Reference Material/D/DOUBLE.htm",a:"The DOUBLE function converts Expression into a double-precision floating-point value. Examples Suppose that A contains the integer value 45. A double-precision, floating-point version of A can be stored in B by entering: A = 45 B = DOUBLE(A) PRINT, B IDL prints: 45.000000 Syntax Result = DOUBLE( ...",t:"DOUBLE "},"243":{i:0.000160773314086099,u:"../Content/Reference Material/D/DRAW_ROI_Procedure.htm",a:"The DRAW_ROI procedure draws a region or group of regions to the current Direct Graphics device. The primitives used to draw each ROI are based on the TYPE property of the given IDLanROI object. The TYPE property selects between points, polylines, and filled polygons. Examples The following example ...",t:"DRAW_ROI Procedure"},"244":{i:5.50327019655568E-05,u:"../Content/Reference Material/E/E_list.htm",a:"E Routines ",t:"E Routines"},"245":{i:0.000365350433114042,u:"../Content/Reference Material/E/EDGE_DOG.htm",a:"EDGE_DOG is an IDL function that applies the Difference of Gaussians filter to a 2D image array to generate an array containing difference values that represent edges in the original image. Example You can use the EDGE_DOG function to isolate certain structures in an image based on their size. This ...",t:"EDGE_DOG"},"246":{i:0.000293683063221859,u:"../Content/Reference Material/E/EFONT.htm",a:"The EFONT procedure provides a simple widget-based vector font editor and display. Use this procedure to read and/or modify a local copy of the file hersh1.chr , located in the resource/fonts subdirectory of the main IDL directory, which contains the vector fonts used by IDL in plotting. This is a ...",t:"EFONT"},"247":{i:0.000127921587151987,u:"../Content/Reference Material/E/EIGENQL.htm",a:"The EIGENQL function computes the eigenvalues and eigenvectors of an n -by- n real, symmetric array using Householder reductions and the QL method with implicit shifts. This routine is written in the IDL language. Its source code can be found in the file eigenql.pro in the lib subdirectory of the ...",t:"EIGENQL "},"248":{i:0.000512859210259623,u:"../Content/Reference Material/E/EIGENVEC.htm",a:"The EIGENVEC function computes the eigenvectors of an n -by- n real, non-symmetric array using Inverse Subspace Iteration. Use ELMHES and HQR to find the eigenvalues of an n -by- n real, nonsymmetric array. This routine is written in the IDL language. Its source code can be found in the file ...",t:"EIGENVEC "},"249":{i:0.000155309815940717,u:"../Content/Reference Material/E/ELLIPSE.htm",a:"The ELLIPSE function adds an ellipse annotation to an existing IDL graphic. Example The following lines create the graphic shown at the top of this topic. map = MAP(\u0027Lambert Azimuthal\u0027, $ LIMIT=[-90,-90,90,90], $ FILL_COLOR=\"light_blue\") t = TEXT([0.70,0.74], [0.92,0.88], $ [\"Lambert ...",t:"ELLIPSE"},"250":{i:0.000554369457739709,u:"../Content/Reference Material/E/ELMHES.htm",a:"The ELMHES function reduces a real, nonsymmetric n by n array A to upper Hessenberg form. ELMHES is based on the routine elmhes described in section 11.5 of Numerical Recipes in C: The Art of Scientific Computing (Second Edition), published by Cambridge University Press, and is used by permission. ...",t:"ELMHES "},"251":{i:0.000365350433114042,u:"../Content/Reference Material/E/EMBOSS.htm",a:"The EMBOSS function applies a convolution operator to a 2D image array to generate an array containing difference values that represent edges in the original image. This process imparts an embossed appearance to the image. Examples The EMBOSS function can be used to enhance the appearance of edges ...",t:"EMBOSS"},"252":{i:5.60100244612055E-05,u:"../Content/Reference Material/E/EMPTY_Procedure.htm",a:"The EMPTY procedure causes all buffered output for the current graphics device to be written. IDL uses buffered output on many display devices for reasons of efficiency. This buffering leads to rare occasions where a program needs to be certain that data are not waiting in a buffer, but have ...",t:"EMPTY Procedure"},"253":{i:0.000366875705816166,u:"../Content/Reference Material/E/ENABLE_SYSRTN.htm",a:"The ENABLE_SYSRTN procedure enables/disables IDL system routines. This procedure is intended for use by runtime and callable IDL applications, and is not generally useful for interactive use. Special Cases The following is a list of cases in which ENABLE_SYSRTN is unable to enable or disable a ...",t:"ENABLE_SYSRTN "},"254":{i:9.5045271849948E-05,u:"../Content/Reference Material/E/EOF.htm",a:"The EOF function tests the specified file unit for the end-of-file condition. The EOF function cannot be used with files opened with the RAWIO keyword to the OPEN routines. Many of the devices commonly used with RAWIO signal their end-of-file by returning a zero transfer count to the I/O operation ...",t:"EOF "},"255":{i:5.50327019655568E-05,u:"../Content/Reference Material/E/EOS_Routines.htm",a:"EOS Routines HDF-EOS Overview ",t:"EOS Routines"},"256":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_EH_CONVANG.htm",a:"This function converts angles between three units: decimal degrees, radians, and packed degrees-minutes-seconds. In the degrees-minutes-seconds unit, an angle is expressed as an integral number of degrees and minutes and a float point value of seconds packed as a single double as follows: ...",t:"EOS_EH_CONVANG"},"257":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_EH_GETVERSION.htm",a:"The EOS_EH_GETVERSION function is used to retrieve the HDF-EOS version string of an HDF-EOS file, which is returned in the version argument. This designates the version of HDF-EOS that was used to create the file. This string is of the form “HDFEOS_Vmaj.min” where maj is the major version and min is ...",t:"EOS_EH_GETVERSION"},"258":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_EH_IDINFO.htm",a:"This function returns the HDF file IDs corresponding to the HDF-EOS file ID returned by EOS_SW_OPEN, EOS_GD_OPEN, or EOS_PT_OPEN. These IDs can then be used to create or access native HDF structures such as SDS arrays, Vdatas, or HDF attributes within an HDF-EOS file. Examples To create a vdata ...",t:"EOS_EH_IDINFO"},"259":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_EXISTS.htm",a:"The EOS_EXISTS function determines whether the current HDF-EOS extensions are supported on the current platform. Examples IF (~ HDF_EOS_EXISTS) THEN PRINT,\u0027HDF-EOS not available.\u0027 Syntax Result = EOS_EXISTS( ) Return Value Returns success (1) if the HDF-EOS extensions are supported, and fail (0) if ...",t:"EOS_EXISTS"},"260":{i:0.00149170829623829,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_ATTACH.htm",a:"This function attaches to the grid using the gridname parameter as the identifier. Examples In this example, we attach to the previously created grid, “ExampleGrid”, within the HDF file, GridFile.hdf, referred to by the handle, fid: gridID = EOS_GD_ATTACH(fid, \"ExampleGrid\") The grid can then be ...",t:"EOS_GD_ATTACH"},"261":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_ATTRINFO.htm",a:"This function returns number type and number of elements (count) of a grid attribute. Examples In this example, we return information about the ScalarFloat attribute: status = EOS_GD_ATTRINFO(pointID, \"ScalarFloat\", nt, count) Syntax Result = EOS_GD_ATTRINFO( gridID , attrname , numbertype , count ) ...",t:"EOS_GD_ATTRINFO"},"262":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_BLKSOMOFFSET.htm",a:"This function writes block SOM offset values. This is a special function for SOM MISR data. Syntax Result = EOS_GD_BLKSOMOFFSET( gridID , offset , code ) Return Value Returns SUCCEED (0) if successful and FAIL (–1) otherwise. Arguments gridID The grid ID (long) as returned from EOS_GD_ATTACH . ...",t:"EOS_GD_BLKSOMOFFSET"},"263":{i:9.57090966120056E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_CLOSE.htm",a:"EOS_GD_CLOSE This function closes the HDF grid file. Examples status = EOS_GD_CLOSE(fid) Syntax Result = EOS_GD_CLOSE( fid ) Return Value Returns SUCCEED(0) if successful and FAIL(–1) otherwise. Arguments fid Grid file id (long) returned by EOS_GD_OPEN. Keywords None Version History 5.2 Introduced ",t:"EOS_GD_CLOSE"},"264":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_COMPINFO.htm",a:"This function returns the compression code and compression parameters for a given field. Examples To retrieve the compression information about the Opacity field defined in the EOS_GD_DEFCOMP section: status = EOS_GD_COMPINFO(gridID, \"Opacity\", compcode, compparm) Syntax Result = EOS_GD_COMPINFO( ...",t:"EOS_GD_COMPINFO"},"265":{i:0.00144493047227152,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_CREATE.htm",a:"This function creates a grid within the file. The grid is created as a Vgroup within the HDF file with the name gridname and class GRID. This function establishes the resolution of the grid, (i.e., the number of rows and columns), and its location within the complete global projection through the ...",t:"EOS_GD_CREATE"},"266":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_DEFBOXREGION.htm",a:"This function defines a longitude-latitude box region for a grid. It returns a grid region ID which is used by the EOS_GD_EXTRACTREGION function to read all the entries of a data field within the region. Examples In this example, we define the region to be the first quadrant of the Northern ...",t:"EOS_GD_DEFBOXREGION"},"267":{i:7.0625309954478E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_DEFCOMP.htm",a:"This function sets the HDF field compression for subsequent grid field definitions. The compression does not apply to one-dimensional fields. The compression schemes currently supported are: run length encoding (1), skipping Huffman (3), deflate (gzip) (4) and no compression (0, the default). ...",t:"EOS_GD_DEFCOMP"},"268":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_DEFDIM.htm",a:"This function defines dimensions that are used by the field definition routines (described subsequently) to establish the size of the field. Examples In this example, we define a dimension, Band, with size 15:. status = EOS_GD_DEFDIM(gridID, \"Band\", 15) To specify an unlimited dimension that can be ...",t:"EOS_GD_DEFDIM"},"269":{i:7.6789836178486E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_DEFFIELD.htm",a:"This function defines data fields to be stored in the grid. The dimensions are entered as a string consisting of geolocation dimensions separated by commas. The API will attempt to merge into a single object those fields that share dimensions and in case of multidimensional fields, numbertype. If ...",t:"EOS_GD_DEFFIELD"},"270":{i:7.0625309954478E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_DEFORIGIN.htm",a:"This function defines the origin of the grid data. This allows the user to select any corner of the grid as the origin. Examples In this Example we define the origin of the grid to be the Lower Right corner: status = EOS_GD_DEFORIGIN(gridID, 3) Syntax Result = EOS_GD_DEFORIGIN( gridID , origincode ) ...",t:"EOS_GD_DEFORIGIN"},"271":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_DEFPIXREG.htm",a:"This function defines whether the pixel center or pixel corner (as defined by the EOS_GD_DEFORIGIN function) is used when requesting the location (longitude and latitude) of a given pixel. Examples In this example, we define the pixel registration to be the corner of the pixel cell: status = ...",t:"EOS_GD_DEFPIXREG"},"272":{i:7.6789836178486E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_DEFPROJ.htm",a:"This function defines the GCTP projection and projection parameters of the grid. For GCTP projection information, see the HDF-EOS User’s Guide, Volume 2: Reference Guide provided by NASA. Examples Also see Additional Examples near the bottom of this topic. Example 1 In this example, we define a ...",t:"EOS_GD_DEFPROJ"},"273":{i:7.50432187264587E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_DEFTILE.htm",a:"This function defines the tiling dimensions for fields defined following this function call, analogous to the procedure for setting the field compression scheme using EOS_GD_DEFCOMP. The number of tile dimensions and subsequent field dimensions must be the same and the tile dimensions must be ...",t:"EOS_GD_DEFTILE"},"274":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_DEFVRTREGION.htm",a:"This function subsets on a monotonic field or contiguous elements of a dimension. Whereas the EOS_GD_DEFBOXREGION function subsets along the XDim and YDim dimensions, this function allows the user to subset along any other dimension. The region is specified by a set of minimum and maximum values and ...",t:"EOS_GD_DEFVRTREGION"},"275":{i:0.00132298607654224,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_DETACH.htm",a:"This function detaches from the grid interface. This routine should be run before exiting from the grid file for every grid opened by EOS_GD_CREATE or EOS_GD_ATTACH. Examples In this example, we detach a grid structure: status = EOS_GD_DETACH(gridID) Syntax Result = EOS_GD_DETACH( gridID ) Return ...",t:"EOS_GD_DETACH"},"276":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_DIMINFO.htm",a:"This function retrieves the size of the specified dimension. Examples In this example, we retrieve information about the dimension, “Bands”: dimsize = EOS_GD_DIMINFO(gridID, \"Bands\") Syntax Result = EOS_GD_DIMINFO( gridID , dimname ) Return Value Size of dimension. If FAIL(–1), could signify an ...",t:"EOS_GD_DIMINFO"},"277":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_DUPREGION.htm",a:"This function copies the information stored in a current region or period to a new region or period and generates a new id. It is useful when the user wishes to further subset a region (period) in multiple ways. Examples In this example, we first subset a grid with EOS_GD_DEFBOXREGION, duplicate the ...",t:"EOS_GD_DUPREGION"},"278":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_EXTRACTREGION.htm",a:"This function reads data into the data buffer from a subsetted region as defined by EOS_GD_DEFBOXREGION. Examples In this example, we extract data from the “Temperature” field from the region defined in EOS_GD_DEFBOXREGION. The size of the subsetted region for the field is given by the ...",t:"EOS_GD_EXTRACTREGION"},"279":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_FIELDINFO.htm",a:"This function retrieves information on a specific data field. Examples In this example, we retrieve information about the Spectra data fields: status = EOS_GD_FIELDINFO(gridID, \"Spectra\", rank, dims,$ numbertype, dimlist) Syntax Result = EOS_GD_FIELDINFO( gridID , fieldname , rank , dims , ...",t:"EOS_GD_FIELDINFO"},"280":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_GETFILLVALUE.htm",a:"This function retrieves the fill value for the specified field. Examples In this example, we get the fill value for the “Temperature” field: status = EOS_GD_GETFILLVALUE(gridID, \"Temperature\", tempfill) Syntax Result = EOS_GD_GETFILLVALUE( gridID , fieldname , fillvalue ) Return Value Returns ...",t:"EOS_GD_GETFILLVALUE"},"281":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_GETPIXELS.htm",a:"This function returns the pixel rows and columns for specified longitude/latitude pairs. This function converts longitude/latitude pairs into (0-based) pixel rows and columns. The origin is the upper left-hand corner of the grid. This routine is the pixel subsetting equivalent of ...",t:"EOS_GD_GETPIXELS"},"282":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_GETPIXVALUES.htm",a:"This function reads data from a data field for the specified pixels. It is the pixel subsetting equivalent of EOS_GD_EXTRACTREGION. All entries along the non-geographic dimensions (i.e., NOT XDim and YDim) are returned. Examples To read values from the Spectra field with dimensions, Bands, YDim, and ...",t:"EOS_GD_GETPIXVALUES"},"283":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_GRIDINFO.htm",a:"This function returns the number of rows, columns and the location, in meters, of the upper left and lower right corners of the grid image. Examples In this example, we retrieve information from a previously created grid with a call to EOS_GD_ATTACH: status = EOS_GD_GRIDINFO(gridID, xdimsize, ...",t:"EOS_GD_GRIDINFO"},"284":{i:6.98828078775762E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_INQATTRS.htm",a:"This function retrieves information about attributes defined in a grid. The attribute list is returned as a string with each attribute name separated by commas. See STRSPLIT to separate the attribute list. Examples In this example, we retrieve information about the attributes defined in a grid ...",t:"EOS_GD_INQATTRS"},"285":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_INQDIMS.htm",a:"This function retrieves information about dimensions defined in a grid. The dimension list is returned as a string with each dimension name separated by commas. See STRSPLIT to separate the dimension list. Examples To retrieve information about the dimensions, use the following statement: ndim = ...",t:"EOS_GD_INQDIMS"},"286":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_INQFIELDS.htm",a:"This function retrieves information about the data fields defined in grid. The field list is returned as a string with each data field separated by commas. The rank and numbertype arrays will have an entry for each field. See STRSPLIT to separate the field list. Examples To retrieve information ...",t:"EOS_GD_INQFIELDS"},"287":{i:9.57090966120056E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_INQGRID.htm",a:"This function retrieves number and names of grids defined in HDF-EOS file. The grid list is returned as a string with each grid name separated by commas. See STRSPLIT to separate the grid list. Examples In this example, we retrieve information about the grids defined in an HDF-EOS file, HDFEOS.hdf: ...",t:"EOS_GD_INQGRID"},"288":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_INTERPOLATE.htm",a:"This function performs bilinear interpolation on a grid field. It assumes that the pixel data values are uniformly spaced which is strictly true only for an infinitesimally small region of the globe but is a good approximation for a sufficiently small region. The default position of the pixel value ...",t:"EOS_GD_INTERPOLATE"},"289":{i:7.6789836178486E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_NENTRIES.htm",a:"This function returns the number of entries and descriptive string buffer size for a specified entity. Examples In this example, we determine the number of data field entries: ndims = EOS_GD_NENTRIES(gridID, 4) Syntax Result = EOS_GD_NENTRIES( gridID , entrycode [, LENGTH = variable ] ) Return Value ...",t:"EOS_GD_NENTRIES"},"290":{i:9.57090966120056E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_OPEN.htm",a:"This function creates a new file or opens an existing one. Examples In this example, we create a new grid file named, GridFile.hdf. It returns the file handle, fid. fid = EOS_GD_OPEN(\"GridFile.hdf\", /CREATE) Syntax Result = EOS_GD_OPEN( filename , access [, / CREATE ] [, / RDWR | , / READ ] ) Return ...",t:"EOS_GD_OPEN"},"291":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_ORIGININFO.htm",a:"This function retrieves the origin code. Syntax Result = EOS_GD_ORIGININFO( gridID , origincode ) Return Value Returns 0 if successful, and –1 otherwise. A return value of –1 could signify an improper grid id or entry code. Arguments gridID Grid id (long) returned by EOS_GD_CREATE or EOS_GD_ATTACH . ...",t:"EOS_GD_ORIGININFO"},"292":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_PIXREGINFO.htm",a:"This function retrieves the pixel registration code. Syntax Result = EOS_GD_PIXREGINFO( gridID , pixregcode ) Return Value Returns SUCCEED (0) if successful and FAIL (–1) otherwise. Arguments gridID Grid id (long) returned by EOS_GD_CREATE or EOS_GD_ATTACH . pixregcode A named variable that will ...",t:"EOS_GD_PIXREGINFO"},"293":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_PROJINFO.htm",a:"This function retrieves the GCTP projection code, zone code, spheroid code and the projection parameters of the grid. For GCTP projection information, see the HDF-EOS User’s Guide, Volume 2: Reference Guide provided by NASA. Syntax Result = EOS_GD_PROJINFO( gridID , projcode , zonecode , spherecode ...",t:"EOS_GD_PROJINFO"},"294":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_QUERY.htm",a:"The EOS_GD_QUERY function returns information about a specified grid. Syntax Result = EOS_GD_QUERY( Filename , GridName , [ Info ]) Return Value This function returns an integer value of 1 if the file is an HDF file with EOS GRID extensions, and 0 otherwise. Arguments Filename A string containing ...",t:"EOS_GD_QUERY"},});