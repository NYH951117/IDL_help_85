define({"652":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF Routines/HDF_VD_FEXIST.htm",a:"The HDF_VD_FEXIST function determines whether the specified fields exist in the given HDF file. Syntax Result = HDF_VD_FEXIST( VData , Fieldnames ) Return Value Returns 1 (True) if all the specified fields exist. Arguments VData The VData handle returned by a previous call to HDF_VD_ATTACH . ...",t:"HDF_VD_FEXIST"},"653":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF Routines/HDF_VD_FIND.htm",a:"The HDF_VD_FIND function returns the reference number of a VData with the specified name in an HDF file. Syntax Result = HDF_VD_FIND( FileHandle , Name ) Return Value Returns the reference number of the named VData. A 0 is returned if an error occurs or a VData of the given name does not exist. ...",t:"HDF_VD_FIND"},"654":{i:6.98828078775762E-05,u:"../Content/Reference Material/H/HDF Routines/HDF_VD_GET.htm",a:"The HDF_VD_GET procedure is a general VData inquiry routine. Set the various keywords to named variables to return information about a VData in an HDF file. Examples HDF_VD_GET, vdat, CLASS=c, COUNT=co, FIELDS=f, NAME=n, SIZE=s Syntax HDF_VD_GET, VData [, CLASS = variable ] [, COUNT = variable ] [, ...",t:"HDF_VD_GET"},"655":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF Routines/HDF_VD_GETID.htm",a:"The HDF_VD_GETID function returns the VData reference number for the next VData in an HDF file after the specified VData_id . Set VData_id to -1 to return the first VData ID in the file. Syntax Result = HDF_VD_GETID( FileHandle , VData_id ) Return Value Returns the next VData reference number. ...",t:"HDF_VD_GETID"},"656":{i:0.000121535385346435,u:"../Content/Reference Material/H/HDF Routines/HDF_VD_GETINFO.htm",a:"The HDF_VD_GETINFO procedure is a general VData inquiry routine. Set the various keywords to named variables to return information about each field of a VData in an HDF file. Examples HDF_VD_GET, Vdat, NFIELDS=n FOR index=0,n-1 DO BEGIN HDF_VD_GETINFO, Vdat, index, NAME=n, TYPE=t, ORDER=o PRINT, ...",t:"HDF_VD_GETINFO"},"657":{i:7.6789836178486E-05,u:"../Content/Reference Material/H/HDF Routines/HDF_VD_INSERT.htm",a:"The HDF_VD_INSERT procedure adds a VData or VGroup to the contents of a VGroup in an HDF file. Syntax HDF_VD_INSERT, VGroup , VData [, POSITION = variable ] Arguments VGroup The VGroup handle returned by a previous call to HDF_VG_ATTACH . VData The VData (or VGroup) handle returned by HDF_VD_ATTACH ...",t:"HDF_VD_INSERT"},"658":{i:0.000167527791097042,u:"../Content/Reference Material/H/HDF Routines/HDF_VD_ISATTR.htm",a:"The HDF_VD_ISATTR function determines whether or not a VData is storing an attribute. HDF stores attributes as VDatas, so this routine provides a means to test whether or not a particular VData contains an attribute. Examples For an example using this routine, see HDF_VD_ATTRSET . Syntax Result = ...",t:"HDF_VD_ISATTR"},"659":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF Routines/HDF_VD_ISVD.htm",a:"The HDF_VD_ISVD function determines if the object associated with Id is a VData in an HDF file. Examples Vid = HDF_VG_GETNEXT(Vgrp, -1) PRINT, HDF_VD_ISVD(VGrp, Vid) Syntax Result = HDF_VD_ISVD( VGroup , Id ) Return Value Returns True (1) if the object is VData, or False (0) otherwise. Arguments ...",t:"HDF_VD_ISVD"},"660":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF Routines/HDF_VD_ISVG.htm",a:"The HDF_VD_ISVG function determines if the object associated with Id is a VGroup in an HDF file. Examples Vid = HDF_VG_GETNEXT(Vgrp, -1) PRINT, HDF_VD_ISVG(VGrp, Vid) Syntax Result = HDF_VD_ISVG( VGroup , Id ) Return Value Returns True (1) if the object is a VGroup, or False (0) otherwise. Arguments ...",t:"HDF_VD_ISVG"},"661":{i:0.000366875705816166,u:"../Content/Reference Material/H/HDF Routines/HDF_VD_LONE.htm",a:"The HDF_VD_LONE function returns an array containing all VDatas in an HDF file that are not contained in another VData. Examples X = HDF_VD_LONE(fid) IF N_ELEMENTS(X) EQ 0 THEN $ PRINT, \u0027No Lone VDatas\u0027 ELSE PRINT, \u0027Lone VDatas:\u0027, X Syntax Result = HDF_VD_LONE( FileHandle [, MAXSIZE = value ] ) ...",t:"HDF_VD_LONE"},"662":{i:0.000167527791097042,u:"../Content/Reference Material/H/HDF Routines/HDF_VD_NATTRS.htm",a:"The HDF_VD_NATTRS function returns the number of attributes associated with the specified VData or VData/field pair. Examples For an example using this routine, see HDF_VD_ATTRSET . Syntax Result = HDF_VD_NATTRS( VData , FieldID ) Return Value Returns the number of attributes if successful. ...",t:"HDF_VD_NATTRS"},"663":{i:0.000131079901821862,u:"../Content/Reference Material/H/HDF Routines/HDF_VD_READ.htm",a:"The HDF_VD_READ function reads data from a VData in an HDF file. The default is to use FULL_INTERLACE and to read all fields in all records. The user can override the defaults with keywords. If multiple fields with different data types are read, all of the data is read into a byte array. The data ...",t:"HDF_VD_READ"},"664":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF Routines/HDF_VD_SEEK.htm",a:"The HDF_VD_SEEK procedure moves the read pointer within the specified VData in an HDF file to a specific record number. Note that the record number is zero-based. Syntax HDF_VD_SEEK, VData , Record Arguments VData A VData handle returned by HDF_VD_ATTACH . Record The zero-based record number to ...",t:"HDF_VD_SEEK"},"665":{i:9.57090966120056E-05,u:"../Content/Reference Material/H/HDF Routines/HDF_VD_SETINFO.htm",a:"The HDF_VD_SETINFO procedure specifies general information about a VData in an HDF file. Keywords can be used to establish the name, class, and interlace for the specified VData. Examples HDF_VD_SETINFO, Vdat, NAME=\u0027My Favorite Data\u0027, /FULL Syntax HDF_VD_SETINFO, VData [, CLASS = string ] [, / ...",t:"HDF_VD_SETINFO"},"666":{i:0.000131079901821862,u:"../Content/Reference Material/H/HDF Routines/HDF_VD_WRITE.htm",a:"The HDF_VD_WRITE procedure stores data in a VData in an HDF file. There are many restrictions on writing data to a VData. When writing multiple fields of varying types, only limited error checking is possible. When writing a series of fields all with the same type, data is converted to that type ...",t:"HDF_VD_WRITE"},"667":{i:0.000157889161695545,u:"../Content/Reference Material/H/HDF Routines/HDF_VG_ADDTR.htm",a:"The HDF_VG_ADDTR procedure adds a tag and reference to the specified VGroup in an HDF file. Examples See HDF_SD_IDTOREF for an example using this function. Syntax HDF_VG_ADDTR, VGroup, Tag, Ref Arguments VGroup The VGroup handle returned by a previous call to HDF_VG_ATTACH . Tag The tag to be ...",t:"HDF_VG_ADDTR"},"668":{i:0.00136678100308086,u:"../Content/Reference Material/H/HDF Routines/HDF_VG_ATTACH.htm",a:"The HDF_VG_ATTACH function attaches (opens) a VGroup in an HDF file for reading or writing. If VGroup_id is set to -1, a new VGroup is created. If neither the READ nor WRITE keywords are set, the VGroup is opened for reading. Examples See HDF_SD_IDTOREF for an example using this function. Syntax ...",t:"HDF_VG_ATTACH"},"669":{i:0.00054514738415572,u:"../Content/Reference Material/H/HDF Routines/HDF_VG_DETACH.htm",a:"The HDF_VG_DETACH procedure should be called when you are finished accessing a VGroup in an HDF file. This routine must be called for every VGroup attached for writing before closing the HDF file in order to insure that VSET information is properly updated. Examples See HDF_SD_IDTOREF for an example ...",t:"HDF_VG_DETACH"},"670":{i:0.000157889161695545,u:"../Content/Reference Material/H/HDF Routines/HDF_VG_GETID.htm",a:"The HDF_VG_GETID function returns the VGroup ID for the next VGroup after the specified VGroup_id in an HDF file. Use a VGroup_id of -1 to get the first VGroup in the file. Examples See HDF_SD_IDTOREF for an example using this function. Syntax Result = HDF_VG_GETID( FileHandle , VGroup_id ) Return ...",t:"HDF_VG_GETID"},"671":{i:0.000192276995766148,u:"../Content/Reference Material/H/HDF Routines/HDF_VG_GETINFO.htm",a:"The HDF_VG_GETINFO procedure is a general VGroup inquiry routine. Set the various keywords to named variables to return information about different aspects of a VGroup in an HDF file. Examples HDF_VG_GETINFO, Vgrp, CLASS=c, NAME=nm, NENTRIES=n PRINT, c, nm, n Syntax HDF_VG_GETINFO, VGroup [, CLASS = ...",t:"HDF_VG_GETINFO"},"672":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF Routines/HDF_VG_GETNEXT.htm",a:"The HDF_VG_GETNEXT function returns the reference number of the next object inside a VGroup in an HDF file. If Id is -1, the first item in the VGroup is returned, otherwise Id should be set to a reference number previously returned by HDF_VG_GETNEXT. Syntax Result = HDF_VG_GETNEXT( VGroup , Id ) ...",t:"HDF_VG_GETNEXT"},"673":{i:7.74006106199205E-05,u:"../Content/Reference Material/H/HDF Routines/HDF_VG_GETTR.htm",a:"The HDF_VG_GETTR procedure returns the tag/reference pair at the specified position within a VGroup in an HDF file. Syntax HDF_VG_GETTR, VGroup , Index , Tags , Refs Arguments VGroup The VGroup handle returned by a previous call to HDF_VG_ATTACH . Index The position within VGroup . Tags A named ...",t:"HDF_VG_GETTR"},"674":{i:0.000134610349838908,u:"../Content/Reference Material/H/HDF Routines/HDF_VG_GETTRS.htm",a:"The HDF_VG_GETTRS procedure returns the tag/reference pairs of the HDF file objects belonging to the specified VGroup. Syntax HDF_VG_GETTRS, VGroup , Tags , Refs [, MAXSIZE = value ] Arguments VGroup The VGroup handle returned by a previous call to HDF_VG_ATTACH . Tags A named variable in which the ...",t:"HDF_VG_GETTRS"},"675":{i:0.000180257070349908,u:"../Content/Reference Material/H/HDF Routines/HDF_VG_INQTR.htm",a:"The HDF_VG_INQTR function returns true if the specified tag and reference pair is linked to the specified VGroup in an HDF file. Examples See HDF_SD_IDTOREF for an example using this function. Syntax Result = HDF_VG_INQTR( VGroup , Tag , Ref ) Return Value Returns true if the link exists. Arguments ...",t:"HDF_VG_INQTR"},"676":{i:0.000108001082528728,u:"../Content/Reference Material/H/HDF Routines/HDF_VG_INSERT.htm",a:"The HDF_VG_INSERT procedure adds a VData or VGroup to the contents of a VGroup in an HDF file. Syntax HDF_VG_INSERT, VGroup , VData [, POSITION = variable ] Arguments VGroup The VGroup handle returned by a previous call to HDF_VG_ATTACH . VData The VData (or VGroup) handle returned by HDF_VD_ATTACH ...",t:"HDF_VG_INSERT"},"677":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF Routines/HDF_VG_ISVD.htm",a:"The HDF_VG_ISVD function returns true if the object associated with Id is a VData in an HDF file. Examples Vid = HDF_VG_GETNEXT(Vgrp, -1) PRINT, HDF_VG_ISVD(VGrp, Vid) Syntax Result = HDF_VG_ISVD( VGroup , Id ) Return Value Returns true if the specified object is a VData. Arguments VGroup The VGroup ...",t:"HDF_VG_ISVD"},"678":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF Routines/HDF_VG_ISVG.htm",a:"The HDF_VG_ISVG function returns true if the object associated the Id is a VGroup in an HDF file. Examples Vid = HDF_VG_GETNEXT(Vgrp, -1) PRINT, HDF_VG_ISVG(VGrp, Vid) Syntax Result = HDF_VG_ISVG( VGroup , Id ) Return Value Returns true if the specified object is a VGroup. Arguments VGroup The ...",t:"HDF_VG_ISVG"},"679":{i:0.000366875705816166,u:"../Content/Reference Material/H/HDF Routines/HDF_VG_LONE.htm",a:"The HDF_VG_LONE function returns an array containing the IDs of all VGroups in an HDF file that are not contained in another VGroup. Examples X=HDF_VG_LONE(fid) IF X(0) EQ-1 THEN $ PRINT, \"No Lone VGroups\" ELSE PRINT, \"Lone VGroups:\", X Syntax Result = HDF_VG_LONE( FileHandle [, MAXSIZE = value ] ) ...",t:"HDF_VG_LONE"},"680":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF Routines/HDF_VG_NUMBER.htm",a:"The HDF_VG_NUMBER function returns the number of HDF file objects in the specified VGroup. Syntax Result = HDF_VG_NUMBER( VGroup ) Return Value Returns the number of objects. Arguments VGroup The VGroup handle returned by a previous call to HDF_VG_ATTACH . Keywords None Version History 4.0 ...",t:"HDF_VG_NUMBER"},"681":{i:9.57090966120056E-05,u:"../Content/Reference Material/H/HDF Routines/HDF_VG_SETINFO.htm",a:"The HDF_VG_SETINFO procedure sets the name and class of a VGroup. Examples fid = HDF_OPEN(\u0027demo.hdf\u0027,/RDWR) ; Open an HDF file: vgid = HDF_VG_ATTACH(fid, -1, /WRITE) ; Add a new VGroup: ; Set the name and class for the VGroup: HDF_VG_SETINFO, vgid, NAME=\u0027My Name\u0027, CLASS=\u0027My VGroup Class\u0027 ; Retrieve ...",t:"HDF_VG_SETINFO"},"682":{i:6.15518474307913E-05,u:"../Content/Reference Material/H/HDF-EOS Routines.htm",a:"HDF-EOS Routines HDF-EOS Overview ",t:"HDF-EOS Routines"},"683":{i:6.34840370460683E-05,u:"../Content/Reference Material/H/HDF5_Routines.htm",a:"HDF5 Routines HDF5 Overview ",t:"HDF5 Routines"},"684":{i:0.000650282192985853,u:"../Content/Reference Material/H/HDF5 Routines/H5_BROWSER.htm",a:"The H5_BROWSER fun ction presents a gra phical user interface for viewing and reading HDF5 files. The browser provides a tree view of the HDF5 file or files, a data preview window, and an information window for the selected objects. The browser may be created as either a selection dialog with ...",t:"H5_BROWSER "},"685":{i:0.000282689300076116,u:"../Content/Reference Material/H/HDF5 Routines/H5_CLOSE.htm",a:"The H5_CLOSE procedure flushes all data to disk, closes file identifiers, and cleans up memory. This routine closes IDL’s link to its HDF5 libraries. This procedure is used automatically by IDL when RESET_SESSION is issued, but it may also be called if the user desires to free all HDF5 resources. ...",t:"H5_CLOSE"},"686":{i:0.000374446752040677,u:"../Content/Reference Material/H/HDF5 Routines/H5_CREATE.htm",a:"The H5_CREATE function creates and closes a new HDF5 file. This is a simplified routine that encapsulates some of the routines listed in the following sections. Dataspaces are all defined as the full extent of the data, and datatypes are created automatically based on the type of the data. There are ...",t:"H5_CREATE"},"687":{i:0.000282689300076116,u:"../Content/Reference Material/H/HDF5 Routines/H5_GET_LIBVERSION.htm",a:"The H5_GET_LIBVERSION function returns the current version of the HDF5 library used by IDL. Syntax Result = H5_GET_LIBVERSION( ) Return Value Returns a string in the form of ‘ maj . min . rel ’, where maj is the major number, min is the minor number, and rel is the release number. An example would ...",t:"H5_GET_LIBVERSION "},"688":{i:0.000272349285065851,u:"../Content/Reference Material/H/HDF5 Routines/H5_GETDATA.htm",a:"This function returns a dataset from an HDF5 file, given the identifier ( StrID ) of the dataset. To read a subset of the data, use H5D_READ instead. Examples file = FILEPATH(\u0027hdf5_test.h5\u0027, $ SUBDIRECTORY=[\u0027examples\u0027,\u0027data\u0027]) data = H5_GETDATA(file, \u0027/images/Eskimo\u0027) HELP, data  IDL displays:  DATA ...",t:"H5_GETDATA"},"689":{i:0.000272349285065851,u:"../Content/Reference Material/H/HDF5 Routines/H5_LIST.htm",a:"The H5_LIST routine lists all of the groups and datasets found in an HDF5 file. This works in a manner similar to the HDF5 tool \"h5dump\". When calling H5_LIST, IDL prints the output directly to the console unless you specify the OUTPUT keyword. The output from H5_LIST is a 3x N string array, the ...",t:"H5_LIST"},"690":{i:0.000535248517296268,u:"../Content/Reference Material/H/HDF5 Routines/H5_OPEN.htm",a:"The H5_OPEN procedure initializes IDL’s HDF5 library. This procedure is issued automatically by IDL when one of IDL’s HDF5 routines is used. This routine is provided for diagnostic purposes only. You do not need to use this routine while working with IDL’s HDF5 routines. Syntax H5_OPEN Arguments ...",t:"H5_OPEN "},"691":{i:0.000853399637821471,u:"../Content/Reference Material/H/HDF5 Routines/H5_PARSE.htm",a:"The H5_PARSE function recursively descends through an HDF5 file or group and creates an IDL structure containing object information and data. This function is not part of the standard HDF5 interface, but is provided as a programming convenience. Two structure fields were added in IDL 6.1. If an ...",t:"H5_PARSE "},"692":{i:0.000191121937782872,u:"../Content/Reference Material/H/HDF5 Routines/H5_PUTDATA.htm",a:"This procedure writes a new dataset to either a new or existing HDF5 file. Because HDF5 does not  provide a mechanism to remove a dataset from a file at this time, it is not possible to put a dataset into a file if the ID to that dataset already exists. Examples Write a new dataset (stored in the ...",t:"H5_PUTDATA"},"693":{i:0.000310827837035622,u:"../Content/Reference Material/H/HDF5 Routines/H5A_CLOSE.htm",a:"The H5A_CLOSE procedure closes the specified attribute and releases resources used by it. After this routine is used, the attribute’s identifier is no longer available until the H5A_OPEN routines are used again to specify that attribute. Further use of the attribute identifier is illegal. Syntax ...",t:"H5A_CLOSE "},"694":{i:0.000105813080456008,u:"../Content/Reference Material/H/HDF5 Routines/H5A_CREATE.htm",a:"The H5A_CREATE function creates a dataset as an attribute of another group or dataset. Attributes are intended to be small objects with a maximum size of 16 kilobytes, data sizes greater than this limit will cause the attribute creation to fail. A large dataset intended as meta data for another ...",t:"H5A_CREATE"},"695":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF5 Routines/H5A_DELETE.htm",a:"The H5A_DELETE procedure removes the attribute specified by its name from a dataset, group, or named datatype. This function requires that all attributes be closed on the specified object and will close any attributes currently open. Example See the example under H5F_CREATE . Syntax H5A_DELETE, ...",t:"H5A_DELETE"},"696":{i:0.000293346367564202,u:"../Content/Reference Material/H/HDF5 Routines/H5A_GET_NAME.htm",a:"The H5A_GET_NAME function retrieves an attribute name given the attribute identifier number. Syntax Result = H5A_GET_NAME( Attribute_id ) Return Value Returns a string containing the attribute name. Arguments Attribute_id An integer representing the attribute’s identifier to be queried. Keywords ...",t:"H5A_GET_NAME "},"697":{i:0.000151251504781767,u:"../Content/Reference Material/H/HDF5 Routines/H5A_GET_NUM_ATTRS.htm",a:"The H5A_GET_NUM_ATTRS function returns the number of attributes attached to a group, dataset, or a named datatype. Syntax Result = H5A_GET_NUM_ATTRS( Loc_id ) Return Value Returns the number of attributes. Arguments Loc_id An integer representing the identifier of the group, dataset, or named ...",t:"H5A_GET_NUM_ATTRS "},"698":{i:0.000250753421063484,u:"../Content/Reference Material/H/HDF5 Routines/H5A_GET_SPACE.htm",a:"The H5A_GET_SPACE function returns the identifier number of a copy of the dataspace for an attribute. Syntax Result = H5A_GET_SPACE( Attribute_id ) Return Value Returns the dataspace’s identifier. This identifier can be released with the H5S_CLOSE . Arguments Attribute_id An integer representing the ...",t:"H5A_GET_SPACE "},"699":{i:0.000250753421063484,u:"../Content/Reference Material/H/HDF5 Routines/H5A_GET_TYPE.htm",a:"The H5A_GET_TYPE function returns the identifier number of a copy of the datatype for an attribute. Syntax Result = H5A_GET_TYPE( Attribute_id ) Return Value Returns the datatype identifier. This identifier should be released with the H5T_CLOSE . Arguments Attribute_id An integer representing the ...",t:"H5A_GET_TYPE "},"700":{i:0.00045279103466645,u:"../Content/Reference Material/H/HDF5 Routines/H5A_OPEN_IDX.htm",a:"The H5A_OPEN_IDX function opens an existing attribute by the index of that attribute within an HDF5 file. Syntax Result = H5A_OPEN_IDX( Loc_id , Index ) Return Value Returns the attribute’s identifier number. Arguments Loc_id An integer representing the identifier of the group, dataset, or named ...",t:"H5A_OPEN_IDX "},"701":{i:0.000295048684670968,u:"../Content/Reference Material/H/HDF5 Routines/H5A_OPEN_NAME.htm",a:"The H5A_OPEN_NAME function opens an existing attribute by the name of that attribute within an HDF5 file. Syntax Result = H5A_OPEN_NAME( Loc_id , Name ) Return Value Returns the attribute’s identifier number. Arguments Loc_id An integer representing the identifier of the group, dataset, or named ...",t:"H5A_OPEN_NAME "},"702":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF5 Routines/H5A_READ.htm",a:"The H5A_READ function reads the data within an attribute, converting from the HDF5 file datatype into the HDF5 memory datatype, and finally into the corresponding IDL datatype. Syntax Result = H5A_READ( Attribute_id [, Datatype_id ]) Return Value Returns an IDL variable containing all of the ...",t:"H5A_READ "},"703":{i:0.000161126079240971,u:"../Content/Reference Material/H/HDF5 Routines/H5A_WRITE.htm",a:"The H5A_WRITE procedure writes data to an attribute. Example See the example under H5F_CREATE . Syntax H5A_WRITE, Attribute_id , Data Arguments Attribute_id An integer giving the identifier of the attribute to which to write the data. Data The data to be written. The following table shows how IDL ...",t:"H5A_WRITE"},"704":{i:0.000301143867963011,u:"../Content/Reference Material/H/HDF5 Routines/H5D_CLOSE.htm",a:"The H5D_CLOSE procedure closes the specified dataset and releases its used resources. After this routine is used, the dataset’s identifier is no longer available until the H5D_GET_SPACE is used again to specify that dataset. Syntax H5D_CLOSE, Dataset_id Arguments Dataset_id An integer representing ...",t:"H5D_CLOSE "},"705":{i:0.000165653960146587,u:"../Content/Reference Material/H/HDF5 Routines/H5D_CREATE.htm",a:"The H5D_CREATE function creates a dataset at the specified location. Example See the example under H5F_CREATE . Syntax Result = H5D_CREATE( Loc_id , Name , Datatype_id , Dataspace_id [, CHUNK_DIMENSIONS = vector [, GZIP = value [, / SHUFFLE ]]]) Return Value The Result gives the dataset identifier. ...",t:"H5D_CREATE"},"706":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF5 Routines/H5D_EXTEND.htm",a:"The Dataspace of a dataset defines the number of dimensions and the size of each dimension. H5D_EXTEND is used to change the current dimensions of the Dataset, within the limits of the Dataspace. Each dimension can be extended up to its maximum, or unlimited. The maximum dimension size is set when ...",t:"H5D_EXTEND"},"707":{i:0.00127722395614456,u:"../Content/Reference Material/H/HDF5 Routines/H5D_GET_SPACE.htm",a:"The H5D_GET_SPACE function returns an identifier number for a copy of the dataspace for a dataset. Syntax Result = H5D_GET_SPACE( Dataset_id ) Return Value Returns the dataspace’s identifier. This identifier can be released with the H5S_CLOSE . Arguments Dataset_id An integer representing the ...",t:"H5D_GET_SPACE "},"708":{i:0.000581763690761035,u:"../Content/Reference Material/H/HDF5 Routines/H5D_GET_STORAGE_SIZE.htm",a:"The H5D_GET_STORAGE_SIZE function returns the amount of storage in bytes required for a dataset. For chunked datasets, this value is the number of allocated chunks times the chunk size. This function does not typically need to be called, as IDL will automatically allocate the necessary memory when ...",t:"H5D_GET_STORAGE_SIZE "},"709":{i:0.000581763690761035,u:"../Content/Reference Material/H/HDF5 Routines/H5D_GET_TYPE.htm",a:"The H5D_GET_TYPE function returns an identifier number for a copy of the datatype for a dataset. Syntax Result = H5D_GET_TYPE( Dataset_id ) Return Value Returns the datatype’s identifier. This identifier can be released with the H5T_CLOSE . Arguments Dataset_id An integer representing the dataset’s ...",t:"H5D_GET_TYPE "},"710":{i:0.000208311373267877,u:"../Content/Reference Material/H/HDF5 Routines/H5D_OPEN.htm",a:"The H5D_OPEN function opens an existing dataset within an HDF5 file. Syntax Result = H5D_OPEN( Loc_id , Name ) Return Value Returns the dataset’s identifier. This identifier can be released with the H5D_CLOSE . Arguments Loc_id An integer representing the identifier of the file or group containing ...",t:"H5D_OPEN "},"711":{i:0.000178532122248149,u:"../Content/Reference Material/H/HDF5 Routines/H5D_READ.htm",a:"The H5D_READ function reads the data within a dataset, converting from the HDF5 file datatype into the HDF5 memory datatype, and finally into the corresponding IDL datatype. Syntax Result = H5D_READ( Dataset_id [, Datatype_id ] [, FILE_SPACE = id ] [, MEMORY_SPACE = id ] ) Return Value Returns an ...",t:"H5D_READ "},"712":{i:0.000204604616292321,u:"../Content/Reference Material/H/HDF5 Routines/H5D_WRITE.htm",a:"The H5D_WRITE procedure writes data to a dataset. Example See the example under H5F_CREATE . Syntax H5D_WRITE, Dataset_id , Data [, MEMORY_SPACE_ID = value ] [, FILE_SPACE_ID = value ] Arguments Dataset_id An integer giving the dataspace identifier to which to write the data. Data The data ...",t:"H5D_WRITE"},"713":{i:0.000993284119404534,u:"../Content/Reference Material/H/HDF5 Routines/H5F_CLOSE.htm",a:"The H5F_CLOSE procedure closes the specified file and releases resources used by it. After this routine is used, the file’s identifier is no longer available. Syntax H5F_CLOSE, File_id Arguments File_id An integer representing the file’s identifier to be closed. Keywords None Version History 5.6 ...",t:"H5F_CLOSE "},"714":{i:0.000698655112416182,u:"../Content/Reference Material/H/HDF5 Routines/H5F_CREATE.htm",a:"The H5F_CREATE function is the primary function for creating HDF5 files. As an alternative, see H5_CREATE . Syntax Result = H5F_CREATE( Filename ) Return Value Result is a file identifier for the newly-created file; this file identifier should be closed by calling H5F_CLOSE when it is no longer ...",t:"H5F_CREATE"},"715":{i:0.000696355368026794,u:"../Content/Reference Material/H/HDF5 Routines/H5F_IS_HDF5.htm",a:"The H5F_IS_HDF5 function determines if a file is in the HDF5 format. Syntax Result = H5F_IS_HDF5( Filename ) Return Value Returns 1 if the file is in the HDF5 format, 0 if otherwise. Arguments Filename A string representing the name of the files to be checked. Keywords None Version History 5.6 ...",t:"H5F_IS_HDF5 "},"716":{i:0.00226351069563457,u:"../Content/Reference Material/H/HDF5 Routines/H5F_OPEN.htm",a:"The H5F_OPEN function opens an existing HDF5 file. Syntax Result = H5F_OPEN( Filename [, / WRITE ]) Return Value Returns the file identifier number. This identifier can be released with the H5F_CLOSE . Arguments Filename A string representing the name of the file to be accessed. Keywords WRITE If ...",t:"H5F_OPEN"},"717":{i:0.000308169845299542,u:"../Content/Reference Material/H/HDF5 Routines/H5G_CLOSE.htm",a:"The H5G_CLOSE procedure closes the specified group and releases resources used by it. After this routine is used, the group’s identifier is no longer available until the H5F_OPEN routine is used again to specify that group. Syntax H5G_CLOSE, Group_id Arguments Group_id An integer representing the ...",t:"H5G_CLOSE "},"718":{i:0.000223606139708374,u:"../Content/Reference Material/H/HDF5 Routines/H5G_CREATE.htm",a:"The H5G_CREATE function creates a new empty group and gives it a name. Example See the example under H5F_CREATE . Syntax Result = H5G_CREATE( Loc_id , Name ) Return Value Result is the group identifier for the open group; this group identifier should be closed by calling H5G_CLOSE when it is no ...",t:"H5G_CREATE"},"719":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF5 Routines/H5G_GET_COMMENT.htm",a:"The H5G_GET_COMMENT function retrieves a comment string from a specified object. Syntax Result = H5G_GET_COMMENT( Loc_id , Name ) Return Value Returns a string containing the comment, or an empty string if no comment exists. Arguments Loc_id An integer representing the identifier of the file or ...",t:"H5G_GET_COMMENT "},"720":{i:0.000350462437568877,u:"../Content/Reference Material/H/HDF5 Routines/H5G_GET_LINKVAL.htm",a:"The H5G_GET_LINKVAL function returns the name of the object pointed to by a symbolic link. Syntax Result = H5G_GET_LINKVAL( Loc_id , Name ) Return Value Returns a string containing the name of the object pointed to by a symbolic link. Arguments Loc_id An integer representing the identifier of the ...",t:"H5G_GET_LINKVAL "},"721":{i:0.000366875705816166,u:"../Content/Reference Material/H/HDF5 Routines/H5G_GET_MEMBER_NAME.htm",a:"The H5G_GET_MEMBER_NAME function retrieves the name of an object within a group, by its zero-based index. This function is not part of the standard HDF5 interface, but is provided as a programming convenience. The H5Giterate() C function is used to retrieve the name. Syntax Result = ...",t:"H5G_GET_MEMBER_NAME "},"722":{i:0.000366875705816166,u:"../Content/Reference Material/H/HDF5 Routines/H5G_GET_NMEMBERS.htm",a:"The H5G_GET_NMEMBERS function returns the number of objects within a group. This function is not part of the standard HDF5 interface, but is provided as a programming convenience. The H5Giterate() C function is used to retrieve the number of members. Syntax Result = H5G_GET_NMEMBERS( Loc_id , Name ) ...",t:"H5G_GET_NMEMBERS "},"723":{i:9.57090966120056E-05,u:"../Content/Reference Material/H/HDF5 Routines/H5G_GET_NUM_OBJS.htm",a:"The H5G_GET_NUM_OBJS function returns number of objects in the group specified by its identifier. Syntax Result = H5G_GET_NUM_OBJS( Loc_id ) Return Value Result is the number of objects contained in the group. Arguments Loc_id An integer giving the file or group identifier. Keywords None Version ...",t:"H5G_GET_NUM_OBJS"},});