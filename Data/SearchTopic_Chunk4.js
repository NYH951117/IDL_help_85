define({"295":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_READATTR.htm",a:"This function reads attributes from the grid. Examples In this example, we read a single precision (32 bit) floating point attribute with the name “ScalarFloat”: status = EOS_GD_READATTR(gridID, \"ScalarFloat\", f32) Syntax Result = EOS_GD_READATTR( gridID , attrname , datbuf ) Return Value Returns ...",t:"EOS_GD_READATTR"},"296":{i:7.6789836178486E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_READFIELD.htm",a:"This function reads data from the grid field. The values within start, stride, and edge arrays refer to the grid field (input) dimensions. The default values for start and stride are 0 and 1 respectively. The default value for edge is (dim - start) / stride where dim refers to the size of the ...",t:"EOS_GD_READFIELD"},"297":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_READTILE.htm",a:"This function reads a single tile of data from a field. If the data is to be read tile by tile, this routine is more efficient than EOS_GD_READFIELD. In all other cases, the later routine should be used. EOS_GD_READTILE does not work on non-tiled fields. Note that the coordinates are in terms of ...",t:"EOS_GD_READTILE"},"298":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_REGIONINFO.htm",a:"This function returns information about a subsetted region for a particular field. Because of differences in number type and geolocation mapping, a given region will give different values for the dimensions and size for various fields. The upleftpt and lowrightpt arrays can be used when creating a ...",t:"EOS_GD_REGIONINFO"},"299":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_SETFILLVALUE.htm",a:"This function sets the fill value for the specified field. The fill value is placed in all elements of the field which have not been explicitly defined. Examples In this example, we set a fill value for the “Temperature” field: tempfill = -999.0 status = EOS_GD_SETFILLVALUE(gridID, \"Temperature\", ...",t:"EOS_GD_SETFILLVALUE"},"300":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_SETTILECACHE.htm",a:"This function sets tile cache parameters. Examples In this example, we set maxcache to 10 tiles. The particular subsetting envisioned for the Spectra field (defined in the EOS_GD_DEFTILE example) would never cross more than 10 tiles along the field’s fastest varying dimension, i.e., XDim. status = ...",t:"EOS_GD_SETTILECACHE"},"301":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_TILEINFO.htm",a:"This function returns the tiling code, tiling rank, and tiling dimensions for a given field. Array ordering of variables used or returned by this routine changed in IDL 5.5. Programs written for versions of this routine prior to IDL 5.5 may need to be modified to work correctly with the current ...",t:"EOS_GD_TILEINFO"},"302":{i:7.6789836178486E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_WRITEATTR.htm",a:"This function writes/updates attributes in the grid. If the attribute does not exist, it is created. If it does exist, then the value(s) is (are) updated. Examples In this example. we write a single precision (32 bit) floating point number with the name “ScalarFloat” and the value 3.14: f32 = 3.14 ...",t:"EOS_GD_WRITEATTR"},"303":{i:7.6789836178486E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_WRITEFIELD.htm",a:"This function writes data to the grid field. The values within start, stride, and edge arrays refer to the grid field (output) dimensions. The input data in the data buffer is read from contiguously. The default values for start and stride are 0 and 1 respectively. The default value for edge is (dim ...",t:"EOS_GD_WRITEFIELD"},"304":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_WRITEFIELDMETA.htm",a:"This function writes the field metadata for a grid field not defined by the Grid API. Array ordering of variables used or returned by this routine changed in IDL 5.5. Programs written for versions of this routine prior to IDL 5.5 may need to be modified to work correctly with the current version. ...",t:"EOS_GD_WRITEFIELDMETA"},"305":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_GD_WRITETILE.htm",a:"This function writes a single tile of data to a field. If the data to be written to a field can be arranged tile by tile, this routine is more efficient than EOS_GD_WRITEFIELD. In all other cases, the EOS_GD_WRITEFIELD routine should be used. EOS_GD_WRITETILE does not work on non-tiled fields. Note ...",t:"EOS_GD_WRITETILE"},"306":{i:0.000908571261629947,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_ATTACH.htm",a:"This function attaches to the point using the pointname parameter as the identifier. Examples In this example, we attach to the previously created point, “ExamplePoint”, within the HDF file, PointFile.hdf, referred to by the handle, fid: pointID = EOS_PT_ATTACH(fid, \"ExamplePoint\") The point can ...",t:"EOS_PT_ATTACH"},"307":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_ATTRINFO.htm",a:"This function returns number type and number of elements (count) of a point attribute. Examples In this example, we return information about the ScalarFloat attribute: status = EOS_PT_ATTRINFO(pointID, \"ScalarFloat\", nt, count) Syntax Result = EOS_PT_ATTRINFO( pointID , attrname , numbertype , count ...",t:"EOS_PT_ATTRINFO"},"308":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_BCKLINKINFO.htm",a:"This function returns the linkfield to the previous level. Examples In this example, we return the linkfield connecting the Observations level to the previous Desc-Loc level. (These levels are defined in the EOS_PT_DEFLEVEL routine.) status = EOS_PT_BCKLINKINFO(pointID2, 1, linkfield) Syntax Result ...",t:"EOS_PT_BCKLINKINFO"},"309":{i:9.57090966120056E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_CLOSE.htm",a:"This function closes the HDF point file. Examples status = EOS_PT_CLOSE(fid) Syntax Result = EOS_PT_CLOSE( fid ) Return Value Returns SUCCEED (0) if successful and FAIL (–1) otherwise. Arguments fid Point file id (long) returned by EOS_PT_OPEN. Keywords None Version History 5.2 Introduced ",t:"EOS_PT_CLOSE"},"310":{i:0.000908571261629947,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_CREATE.htm",a:"This function creates a new point structure. The point is created as a Vgroup within the HDF file with the name pointname and class POINT. Examples In this example, we create a new point structure, ExamplePoint, in the previously created file, PointFile.hdf: pointID = EOS_PT_CREATE(fid, ...",t:"EOS_PT_CREATE"},"311":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_DEFBOXREGION.htm",a:"This function defines an area of interest for a point. It returns a point region ID which is used by the EOS_PT_EXTRACTREGION routine to read the fields from a level for those records within the area of interest.The point structure must have a level with both a Longitude and Latitude (or Colatitude) ...",t:"EOS_PT_DEFBOXREGION"},"312":{i:7.6789836178486E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_DEFLEVEL.htm",a:"This function defines a level within the point. A simple point consists of a single level. A point where there is common data for a number of records can be more efficiently stored with multiple levels. The order in which the levels are defined determines the (0-based) level index. Examples See ...",t:"EOS_PT_DEFLEVEL"},"313":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_DEFLINKAGE.htm",a:"This function defines the linkfield between two levels. This field must be defined in both levels. Examples In this example, we define the ID field as the link between the two levels defined previously in the EOS_PT_DEFLEVEL function: status = EOS_PT_DEFLINKAGE(pointID2, \"Desc-Loc\", $ ...",t:"EOS_PT_DEFLINKAGE"},"314":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_DEFTIMEPERIOD.htm",a:"This function defines a time period for a point. It returns a point period ID which is used by the EOS_PT_EXTRACTPERIOD function to read the fields from a level for those records within the time period. The point structure must have a level with the Time field defined. Examples In this example, we ...",t:"EOS_PT_DEFTIMEPERIOD"},"315":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_DEFVRTREGION.htm",a:"This function allows the user to select those records within a point whose field values are within a given range. (For the current version of this routine, the field must have one of the following HDF data types: 22, 24, 5, 6) This function may be called after EOS_PT_DEFBOXREGION or ...",t:"EOS_PT_DEFVRTREGION"},"316":{i:0.000827319081540037,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_DETACH.htm",a:"This function detaches from a point data set. This function should be run before exiting from the point file for every point opened by EOS_PT_CREATE or EOS_PT_ATTACH. Examples status = EOS_PT_DETACH(pointID) Syntax Result = EOS_PT_DETACH( pointID ) Return Value Returns SUCCEED (0) if successful and ...",t:"EOS_PT_DETACH"},"317":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_EXTRACTPERIOD.htm",a:"This function reads data from the designated level fields into the data buffer from the subsetted time period. Examples In this example, we read data within the subsetted time period defined by EOS_PT_DEFTIMEPERIOD from the Time field: periodID = EOS_PT_DEFTIMEPERIOD(pointID, 35208757.6d, $ ...",t:"EOS_PT_EXTRACTPERIOD"},"318":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_EXTRACTREGION.htm",a:"This function reads data from the designated level fields into the data buffer from the subsetted area of interest. Examples In this example, we read data within the subsetted area of interest defined by EOS_PT_DEFBOXREGION from the Longitude and Latitude fields: regionID = ...",t:"EOS_PT_EXTRACTREGION"},"319":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_FWDLINKINFO.htm",a:"This function returns the linkfield to the given level. Examples In this example, we return the linkfield connecting the Desc-Loc level to the following Observations level. (These levels are defined in the EOS_PT_DEFLEVEL function.): status = EOS_PT_FWDLINKINFO(pointID2, 1, linkfield) Syntax Result ...",t:"EOS_PT_FWDLINKINFO"},"320":{i:7.6789836178486E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_GETLEVELNAME.htm",a:"This function returns the name of a level given the level number (0-based). Examples In this example, we return the level name of the 0th level of the second point defined in the EOS_PT_DEFLEVEL section: status = EOS_PT_GETLEVELNAME(pointID2, 0, levelname) Syntax Result = EOS_PT_GETLEVELNAME( ...",t:"EOS_PT_GETLEVELNAME"},"321":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_GETRECNUMS.htm",a:"This function returns the record numbers in one level that are connected to a given set of records in a different level. The two levels need not be adjacent. The records in one level are related to those in another through the link field. These in turn are related to the next. In this way, each ...",t:"EOS_PT_GETRECNUMS"},"322":{i:9.57090966120056E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_INQATTRS.htm",a:"This function retrieves information about the attributes defined in a point structure. The attribute list is returned as a string with each attribute name separated by a comma. See STRSPLIT to separate the attribute list. Examples nattr = EOS_PT_INQATTRS(pointID, attrlist) Syntax Result = ...",t:"EOS_PT_INQATTRS"},"323":{i:9.57090966120056E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_INQPOINT.htm",a:"This function retrieves the number and names of points defined in an HDF-EOS file. The point list is returned as a string with each point name separated by a comma. See STRSPLIT to separate the attribute list. Examples In this example, we retrieve information about the points defined in an HDF-EOS ...",t:"EOS_PT_INQPOINT"},"324":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_LEVELINDX.htm",a:"This function returns the level index for a given level specified by name. Examples In this example, we return the level index of the Observations level in the multilevel point structure defined in EOS_PT_DEFLEVEL: levindx = EOS_PT_LEVELINDEX(pointID2, \"Observations\") Syntax Result = ...",t:"EOS_PT_LEVELINDX"},"325":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_LEVELINFO.htm",a:"This function returns information about the fields in a given level. Typical reasons for failure are an improper point id or level number. Examples In this example, we return information about the Desc-Loc (1st) level defined previously: nflds = EOS_PT_LEVELINFO(pointID2, 0, fldlist, fldtype, ...",t:"EOS_PT_LEVELINFO"},"326":{i:7.6789836178486E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_NFIELDS.htm",a:"This function returns the number of fields in a level. Examples In this example, we retrieve the number of fields in the 2nd point defined previously: nflds=EOS_PT_NFIELDS(pointID2,0) Syntax Result = EOS_PT_NFIELDS( pointID , level [, LENGTH = bytes ] ) Return Value Returns number of fields if ...",t:"EOS_PT_NFIELDS"},"327":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_NLEVELS.htm",a:"This function returns the number of levels in a point. Examples In this example, we retrieve the number of levels in the 2nd point defined previously: nlevels = EOS_PT_NLEVELS(pointID2) Syntax Result = EOS_PT_NLEVELS( pointID ) Return Value Returns number of levels if successful and FAIL (–1) ...",t:"EOS_PT_NLEVELS"},"328":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_NRECS.htm",a:"This function returns the number of records in a given level. Examples In this example, we retrieve the number of records in the first level of the 2nd point defined previously: nrecs = EOS_PT_NRECS(pointID2, 0) Syntax Result = EOS_PT_NRECS( pointID , level ) Return Value Returns number of records ...",t:"EOS_PT_NRECS"},"329":{i:9.57090966120056E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_OPEN.htm",a:"This function creates a new file or opens an existing one. Examples In this example, we create a new point file named, PointFile.hdf. It returns the file handle, fid. fid = EOS_PT_OPEN(\"PointFile.hdf\", /CREATE) Syntax Result = EOS_PT_OPEN( fieldname [, / CREATE ] [, / RDWR | , / READ ] ) Return ...",t:"EOS_PT_OPEN"},"330":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_PERIODINFO.htm",a:"This function returns information about a subsetted time period for a particular fieldlist. Examples In this example, we get the size of the subsetted time period defined in EOS_PT_DEFTIMEPERIOD for the Time field: status = EOS_PT_PERIODINTO(pointID, periodID, 0, \"Time\", size) Syntax Result = ...",t:"EOS_PT_PERIODINFO"},"331":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_PERIODRECS.htm",a:"This function returns the record numbers within a subsetted time period for a particular level. Examples In this example, we get the number of records and record numbers within the subsetted area of interest defined in EOS_PT_DEFTIMEPERIOD for the 0th level: status = EOS_PT_PERIODRECS(pointID, ...",t:"EOS_PT_PERIODRECS"},"332":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_QUERY.htm",a:"The EOS_PT_QUERY function returns information about a specified point. Syntax Result = EOS_PT_QUERY( Filename , PointName , [ Info ] ) Return Value This function returns an integer value of 1 if the file is an HDF file with EOS POINT extensions, and 0 otherwise. Arguments Filename A string ...",t:"EOS_PT_QUERY"},"333":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_READATTR.htm",a:"This function reads attributes. Examples In this example, we read a single precision (32 bit) floating point attribute with the name “ScalarFloat”: status = EOS_PT_READATTR(pointID, \"ScalarFloat\", f32) Syntax Result = EOS_PT_READATTR( pointID , attrname , datbuf ) Return Value Returns SUCCEED (0) if ...",t:"EOS_PT_READATTR"},"334":{i:7.53708992887812E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_READLEVEL.htm",a:"This function reads data from the specified fields and records of a single level in a point. Examples In this example, we read records 0, 2, and 3 from the Temperature and Mode fields in the first level of the point referred to by point ID, pointID. Temperature is a 32-bit float field and Mode is a ...",t:"EOS_PT_READLEVEL"},"335":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_REGIONINFO.htm",a:"This function returns information about a subsetted area of interest for a particular fieldlist. Examples In this example, we get the size of the subsetted area of interest defined in EOS_PT_DEFBOXREGION from the Longitude and Latitude fields: status = EOS_PT_REGIONINFO(pointID, regionID, 0, ...",t:"EOS_PT_REGIONINFO"},"336":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_REGIONRECS.htm",a:"This function returns the record numbers within a subsetted geographic region for a particular level. Examples In this example, we get the number of records and record numbers within the subsetted area of interest defined in EOS_PT_DEFBOXREGION for the 0th level: status = EOS_PT_REGIONRECS(pointID, ...",t:"EOS_PT_REGIONRECS"},"337":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_SIZEOF.htm",a:"This function returns information about specified fields in a point regardless of level. Examples In this example, we return the size in bytes of the Label and Rainfall fields in the 2nd point defined in the EOS_PT_DEFLEVEL function: size = EOS_PT_SIZEOF(pointID2, \"Label,Rainfall\", fldlevel) Syntax ...",t:"EOS_PT_SIZEOF"},"338":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_UPDATELEVEL.htm",a:"This function updates the specified fields and records of a single level. Examples In this example, we update records 0, 2, and 3 in the Temperature and Mode fields in the second level in the point referred to by the point ID pointID. Temperature is a 4 value 32-bit float field and Mode is a 4 ...",t:"EOS_PT_UPDATELEVEL"},"339":{i:7.6789836178486E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_WRITEATTR.htm",a:"This function writes/updates an attribute in a point. If the attribute does not exist, it is created. If it does exist, then the value(s) is (are) updated. Examples In this example, we write a single precision (32 bit) floating point number with the name “ScalarFloat” and the value 3.14: f32 = 3.14f ...",t:"EOS_PT_WRITEATTR"},"340":{i:7.53708992887812E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_PT_WRITELEVEL.htm",a:"This function writes (appends) full records to a level. The data in each record must be packed. Refer to the section on Vdatas in the HDF documentation. The input data buffer must be sufficient to fill the number of records designated. Examples In this example, we write 5 records to the first level ...",t:"EOS_PT_WRITELEVEL"},"341":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_QUERY.htm",a:"The EOS_QUERY function returns information about the makeup of an HDF-EOS file. Syntax Result = EOS_QUERY( Filename , [ Info ] ) Return Value This function returns integer value of 1 if the file is an HDF file with EOS extensions, and 0 otherwise. Arguments Filename A scalar string containing the ...",t:"EOS_QUERY"},"342":{i:0.00109493537975735,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_ATTACH.htm",a:"This function attaches to the swath using the swathname parameter as the identifier. Examples In this example, we attach to the previously created swath, “ExampleSwath”, within the HDF file, SwathFile.hdf, referred to by the handle, fid: swathID = EOS_SW_ATTACH(fid, \"ExampleSwath\") The swath can ...",t:"EOS_SW_ATTACH"},"343":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_ATTRINFO.htm",a:"This function returns the number type and number of elements (count) of a swath attribute. Examples In this example, we return information about the ScalarFloat attribute: status = EOS_SW_ATTRINFO(pointID, \"ScalarFloat\", nt, count) Syntax Result = EOS_SW_ATTRINFO( swathID , attrname , numbertype , ...",t:"EOS_SW_ATTRINFO"},"344":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_CLOSE.htm",a:"This function closes the HDF swath file. Examples status = EOS_SW_CLOSE(fid) Syntax Result = EOS_SW_CLOSE( fid ) Return Value Returns SUCCEED (0) if successful and FAIL (–1) otherwise. Arguments fid Swath file id (long) returned by EOS_SW_OPEN. Keywords None Version History 5.2 Introduced ",t:"EOS_SW_CLOSE"},"345":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_COMPINFO.htm",a:"This function returns the compression code and compression parameters for a given field. Examples To retrieve the compression information about the Opacity field defined in the EOS_SW_DEFCOMP section: status = EOS_SW_COMPINFO(swathID, \"Opacity\", compcode, compparm) Syntax Result = EOS_SW_COMPINFO( ...",t:"EOS_SW_COMPINFO"},"346":{i:0.00114171320372411,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_CREATE.htm",a:"This function creates a swath within the file. The swath is created as a Vgroup within the HDF file with the name swathname and class EOS_SWATH. Syntax Result = EOS_SW_CREATE( fid , swathname ) Return Value Returns the swath handle (swathID) if successful and FAIL (–1) otherwise. Arguments fid Swath ...",t:"EOS_SW_CREATE"},"347":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_DEFBOXREGION.htm",a:"This function defines a longitude-latitude box region for a swath. It returns a swath region ID that is used by the EOS_SW_EXTRACTREGION function to read all the entries of a data field within the region. A cross track is within a region if its midpoint is within the longitude-latitude box (0), or ...",t:"EOS_SW_DEFBOXREGION"},"348":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_DEFCOMP.htm",a:"This function sets the HDF field compression for subsequent swath field definitions. The compression does not apply to one-dimensional fields. The compression schemes currently supported are: run length encoding (1), skipping Huffman (3), deflate (gzip) (4) and no compression (0, the default). ...",t:"EOS_SW_DEFCOMP"},"349":{i:7.6789836178486E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_DEFDATAFIELD.htm",a:"This function defines data fields to be stored in the swath. The dimensions are entered as a string consisting of data dimensions separated by commas. The API will attempt to merge into a single object those fields that share dimensions and in case of multidimensional fields, numbertype. If the ...",t:"EOS_SW_DEFDATAFIELD"},"350":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_DEFDIM.htm",a:"This function defines dimensions that are used by the field definition functions (described subsequently) to establish the size of the field. Examples In this example, we define a track geolocation dimension, GeoTrack, of size 2000, a cross track dimension, GeoXtrack, of size 1000 and two ...",t:"EOS_SW_DEFDIM"},"351":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_DEFDIMMAP.htm",a:"This function defines monotonic mapping between the geolocation and data dimensions. Typically the geolocation and data dimensions are of different size (resolution). This function establishes the relation between the two where the offset gives the index of the data element (0-based) corresponding ...",t:"EOS_SW_DEFDIMMAP"},"352":{i:7.6789836178486E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_DEFGEOFIELD.htm",a:"This function defines geolocation fields to be stored in the swath. The dimensions are entered as a string consisting of geolocation dimensions separated by commas. The API will attempt to merge into a single object those fields that share dimensions and in case of multidimensional fields, ...",t:"EOS_SW_DEFGEOFIELD"},"353":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_DEFIDXMAP.htm",a:"Defines a nonregular mapping between the geolocation and       the data dimension. If there does not exist a regular (linear) mapping between a geolocation and data dimension, then the mapping must be made explicit. Each element of the index array, whose dimension is given by the geolocation size, ...",t:"EOS_SW_DEFIDXMAP"},"354":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_DEFTIMEPERIOD.htm",a:"This function defines a time period for a swath. It returns a swath period ID which is used by the EOS_SW_EXTRACTPERIOD function to read all the entries of a data field within the time period. A cross track is within a time period if its midpoint is within the time period box (0), or either of its ...",t:"EOS_SW_DEFTIMEPERIOD"},"355":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_DEFVRTREGION.htm",a:"Whereas the EOS_SW_DEFBOXREGION and EOS_SW_DEFTIMEPERIOD functions perform subsetting along the “Track” dimension, this function allows the user to subset along any dimension. The region is specified by a set of minimum and maximum values and can represent either a dimension index (case 1) or field ...",t:"EOS_SW_DEFVRTREGION"},"356":{i:0.000985728741809934,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_DETACH.htm",a:"This function detaches from the swath interface. It should be run before exiting from the swath file for every swath opened by EOS_SW_CREATE or EOS_SW_ATTACH. Examples status = EOS_SW_DETACH(swathID) Syntax Result = EOS_SW_DETACH( swathID ) Return Value Returns SUCCEED (0) if successful and FAIL ...",t:"EOS_SW_DETACH"},"357":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_DIMINFO.htm",a:"This function retrieves the size of the specified dimension. Examples In this example, we retrieve information about the dimension, “GeoTrack”: dimsize = EOS_SW_DIMINFO(swathID, \"GeoTrack\") Syntax Result = EOS_SW_DIMINFO( swathID , dimname ) Return Value Size of dimension or FAIL (–1) if the swath ...",t:"EOS_SW_DIMINFO"},"358":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_DUPREGION.htm",a:"This function copies the information stored in a current region or period to a new region or period and generates a new id. It is useful when the user wishes to further subset a region (period) in multiple ways. Examples In this example, we first subset a swath with EOS_SW_DEFBOXREGION, duplicate ...",t:"EOS_SW_DUPREGION"},"359":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_EXTRACTPERIOD.htm",a:"This function reads data into the data buffer from the subsetted time period. Only complete crosstracks are extracted. If the external_mode flag is set to (1) then the geolocation fields and the data field can be in different swaths. If set to (0), then these fields must be in the same swath ...",t:"EOS_SW_EXTRACTPERIOD"},"360":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_EXTRACTREGION.htm",a:"This function reads data into the data buffer from the subsetted region. Only complete crosstracks are extracted. If the external_mode flag is set to (1) then the geolocation fields and the data field can be in different swaths. If set to (0), then these fields must be in the same swath structure. ...",t:"EOS_SW_EXTRACTREGION"},"361":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_FIELDINFO.htm",a:"This function retrieves information on a specific data field. Examples In this example, we retrieve information about the Spectra data fields: status = EOS_SW_FIELDINFO(swathID, \"Spectra\", rank, dims, $ numbertype, dimlist) Syntax Result = EOS_SW_FIELDINFO( swathID , fieldname , rank , dims , ...",t:"EOS_SW_FIELDINFO"},"362":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_GETFILLVALUE.htm",a:"This function retrieves the fill value for the specified field. Examples In this example, we get the fill value for the “Temperature” field: status = EOS_SW_GETFILLVALUE(swathID, \"Temperature\", tempfill) Syntax Result = EOS_SW_GETFILLVALUE( swathID , fieldname , fillvalue ) Return Value Returns ...",t:"EOS_SW_GETFILLVALUE"},"363":{i:5.50327019655568E-05,u:"../Content/Reference Material/H/HDF-EOS Routines/EOS_SW_IDXMAPINFO.htm",a:"This function retrieves the size of the indexed array and the array of indexed elements of the specified geolocation mapping. Examples In this example, we retrieve information about the indexed mapping between the “IdxGeo” and “IdxData” dimensions: idxsz = EOS_SW_IDXMAPINFO(swathID, \"IdxGeo\", ...",t:"EOS_SW_IDXMAPINFO"},});