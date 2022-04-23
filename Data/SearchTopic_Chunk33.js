define({"2369":{i:0.000381110428913447,u:"../Content/ESE Routine/ESECatalog.htm",a:"The ESECatalog class represents an ESE server\u0027s catalog and allows the user to examine its contents. Contents include folders and services, represented by ESEFolder and ESEService objects. Methods ESECatalog::GetChild ESECatalog::GetChildren ESECatalog::GetParent Examples The following example ...",t:"ESECatalog"},"2370":{i:0.000399664289305424,u:"../Content/ESE Routine/ESEFolder.htm",a:"The ESEFolder class represents an ESE folder. Folders can exist within the catalog and other folders. They contain other folders and services. Objects of this type can be used to introspect the catalog-folder-service hierarchy. Methods ESEFolder::GetChild ESEFolder::GetChildren ESEFolder::GetParent ...",t:"ESEFolder"},"2371":{i:0.000364818621336153,u:"../Content/ESE Routine/ESEJob.htm",a:"The ESEJob class represents the ESE job that is produced whenever a task is run. It provides the ability to monitor the job\u0027s status and retrieve both input and output parameters. Methods ESEJob::Cancel ESEJob::GetParameter ESEJob::GetParameters ESEJob::Info ESEJob::JSON ESEJob::Monitor Examples ...",t:"ESEJob"},"2372":{i:0.000390439494979604,u:"../Content/ESE Routine/ESEServer.htm",a:"The ESEServer class provides the ability to: Introspect an ESE installation for its catalog Get a task by URI Get a task by name or pattern Upload files Download files Methods ESEServer::About ESEServer::DownloadFile ESEServer::FindTask ESEServer::GetCatalog ESEServer::GetTask ESEServer::Ping ...",t:"ESEServer"},"2373":{i:0.000444703253884441,u:"../Content/ESE Routine/ESEService.htm",a:"The ESEService class represents ESE services. Objects of this type can be used to discover tasks. Methods ESEService::GetChild ESEService::GetChildren ESEService::GetParent Examples Retrieve the \u0027ese_addition\u0027 task by name from the service: Server = ESE.GetServer( \u0027localhost\u0027, 8181 ) Catalog = ...",t:"ESEService"},"2374":{i:0.000512387523869446,u:"../Content/ESE Routine/ESETask.htm",a:"The ESETask class represents ESE tasks. Each time a task is run, a new job is produced. Tasks represent algorithms and jobs represent the execution of an algorithm, with particular inputs, outputs and state. However, ESETask objects do provide the ability to specify input parameter values prior to ...",t:"ESETask"},"2375":{i:0.000256377696990534,u:"../Content/ESE Routine/ESETaskParameter.htm",a:"The ESETaskParameter class represents ESE task parameters. Every parameter of an ESETask , whether input or output, is accessed via an ESETaskParameter object. Accessing the ESETaskParameter is not required. The ESE API automatically validates and converts common data types between IDL variables and ...",t:"ESETaskParameter"},"2376":{i:0.000763252546257999,u:"../Content/GUInavigation/visualize.htm",a:"IDL Graphics Gallery Graphics Topics Graphics Overview Graphics Gallery Modifying Visualizations Long Examples Creating Video Graphics Methods ",t:"IDL Graphics Gallery"},"2377":{i:0.000104937936106204,u:"../Content/GuideMe/Graphics Overview.htm",a:"Graphics Overview Using IDL Graphics The Graphics Window Interface Multiple Graphics in One Window Graphics in Applications Saving Graphics File Formats ",t:"Graphics Overview"},"2378":{i:0.00153880159913057,u:"../Content/GuideMe/Using IDL Graphics.htm",a:"You can use the same basic processes to create and modify any of the IDL graphics. In this topic, we will demonstrate how to use the IDL graphic functions to create graphics and subsequently manipulate them. Creating an IDL graphic To create an IDL graphic, call one of the IDL graphic functions with ...",t:"Using IDL Graphics"},"2379":{i:0.00031274404071163,u:"../Content/GuideMe/GraphicsWindowInterface.htm",a:"IDL\u0027s Graphics window interface allows you  to quickly and easily change the properties of graphics objects without typing anything at the command line. In this topic you will get a brief overview on how to use this Graphical User Interface (GUI). The  Graphics window looks and operates similarly in ...",t:"Graphics Window Interface"},"2380":{i:0.000563484857296568,u:"../Content/GuideMe/MultiViz.htm",a:"IDL provides several ways to display multiple graphics in one window. The following keywords are common to all the IDL graphics: LAYOUT - this keyword  allows you to define a grid and then place multiple graphics within cells in the grid using the CURRENT keyword POSITION - this keyword allows you ...",t:"Multiple Graphics in One Window"},"2381":{i:7.08734984364939E-05,u:"../Content/GuideMe/IncludeGraphicInApp.htm",a:"You can combine graphics within IDL widget applications by using the WIDGET_WINDOW function. Adding graphics to widget applications gives you the functionality of interactive graphic window with the ability to add your own GUI elements.  The code shown below creates the GUI (widget) application ...",t:"Add Graphics to a Widget Application"},"2382":{i:0.000493056046186384,u:"../Content/Objects/Coordinates3DGraphics.htm",a:"Points in xyz space are expressed by vectors of homogeneous coordinates. These vectors are translated, rotated, scaled, and projected onto the two-dimensional drawing surface by multiplying them by transformation matrices. The geometric transformations used by IDL are taken from Chapters 7 and 8 of ...",t:"Coordinates of 3D Graphics"},"2383":{i:0.000547655110172511,u:"../Content/GuideMe/ImageGuideMe/SaveImage.htm",a:"When you display a graphic, you can save it in the following formats. .bmp Windows Bitmap .emf Windows Enhanced Metafile .eps, .ps Encapsulated PostScript .gif Graphics Interchange Format .jpeg, .jpg Joint Photographic Experts Group .jp2, .j2k, .jpx JPEG2000 .kml Open Geospatial Consortium (OGC) ...",t:"Saving Graphics"},"2384":{i:6.98989604371863E-05,u:"../Content/GuideMe/File Formats.htm",a:"Image File Formats Format Description BMP Windows Bitmap format GIF Graphics Interchange Format JPEG Joint Photographic Experts Group format JPEG 2000 JPEG 2000 format MPEG 1 & 2 Moving Picture Experts Group format NRIF NCAR Raster Interchange Format PICT Macintosh version 2 PICT files (bitmap only) ...",t:"File Formats"},"2385":{i:0.000247611051377031,u:"../Content/GUInavigation/basic_plots_gallery.htm",a:"Basic Plots Bubble Plots Line Plots Polar Plots Scatterplots (with Regression) Three-Dimensional Plots  Two-Dimensional Plots Long Example - Plot Supporting Information See Also ",t:"Basic Plots"},"2386":{i:8.77188424962115E-05,u:"../Content/GuideMe/PlotGuideMe/Bubbleplots.htm",a:"BUBBLEPLOT on a Map This example demonstrates how to create a BUBBLEPLOT that is integrated with an underlying map. The graphic above depicts several North American volcanoes with their largest eruptions (by volume) represented with the BUBBLEPLOT function. The area of each bubble is proportional to ...",t:"Bubble Plots"},"2387":{i:6.83878539781827E-05,u:"../Content/GuideMe/PlotGuideMe/LinePlot.htm",a:"You can create line plots using the PLOT function. In this topic, we will use the PLOT function plot a short series of data elements. For an additional example of using line plots, see Plot Supporting Information in the Environmental Monitoring Long Example . ; Define the data. year = [1998, 1999, ...",t:"Line Plots"},"2388":{i:6.83878539781827E-05,u:"../Content/GuideMe/PlotGuideMe/polarplots.htm",a:"With IDL Graphics, you can display polar plots with the POLARPLOT function. This function requires two vector parameters.  The first parameter is the radius,  and the second is the angle (expressed in radians). Before the plot displays, these variables are first converted  from polar to Cartesian ...",t:"Polar Plots"},"2389":{i:6.83878539781827E-05,u:"../Content/GuideMe/PlotGuideMe/Scatterplots.htm",a:"This topic presents two basic examples using the SCATTERPLOT function. The first plots impact crater data with a regression line and the second creates a plot of pixel values in two different bands of an image. Scatterplot with Simple Regression Line The \\examples\\data directory of your IDL ...",t:"Scatterplots"},"2390":{i:6.83878539781827E-05,u:"../Content/GuideMe/PlotGuideMe/plot_3d.htm",a:"You can create three-dimensional plot graphics using the PLOT3D function. In this topic, we will use the PLOT3D function using three variables to display a three-dimensional plot. The example below displays a very simple three-dimensional plot using example data: The code shown below creates the ...",t:"Three-Dimensional Plots"},"2391":{i:6.83878539781827E-05,u:"../Content/GuideMe/PlotGuideMe/plot_2d.htm",a:"The PLOT function allows you to create several types of plot graphics. In this topic, we will use the PLOT function  to display several types of two dimensional line plots. For an additional example of using line plots, see Plot Supporting Information in the Environmental Monitoring Long Example . ...",t:"Two-Dimensional Plots"},"2392":{i:0.000127834383774981,u:"../Content/GuideMe/LongExamples/EnvMonitoring/EM1_PlotSupportingInformation.htm",a:"Part of this study included determining the expected decay rate of tritium in the tanks, assuming the tanks remained intact and no tritium leaked into the surrounding sediment. Given these assumptions, how long will it be before the concentration of tritium in the tank falls below the US EPA ...",t:"Plot Supporting Information"},"2393":{i:0.000247611051377031,u:"../Content/GUInavigation/bar_plots_gallery.htm",a:"Barplots and Histograms Barplots - Basic Barplots - Stacked Errorplots See Also ",t:"Barplots and Histograms"},"2394":{i:0.000119537333022789,u:"../Content/GuideMe/PlotGuideMe/barplots.htm",a:"Bar plots are useful for comparing data in an easy-to-read visualization. The BARPLOT function allows you to quickly create bar plots and define colors, styles, and annotations. The bar plot shown below displays average monthly temperature data for two different years. The code shown below creates ...",t:"Bar Plots"},"2395":{i:9.04784805274433E-05,u:"../Content/GuideMe/PlotGuideMe/barplot_more_examples.htm",a:"Stacked Barplot Example ; Define the data set. data1 = SIN((FINDGEN(15)+1)/15*!PI/2) data2 = data1 + COS((FINDGEN(15))/15*!PI/2) data3 = data2 + 0.25 + RANDOMU(1,15)  ; Plot three bars, stacked. b1 = BARPLOT(data1, BOTTOM_COLOR=\"white\") b2 = BARPLOT(data2, BOTTOM_VALUES=data1, $ FILL_COLOR=\u0027yellow\u0027, ...",t:"BARPLOT Shading and Stacking"},"2396":{i:7.21972736745883E-05,u:"../Content/GuideMe/PlotGuideMe/errorPlots.htm",a:"Use error plots singly or in conjunction with other plots to show error values. The example below illustrates how to use an error plot with a bar plot to show a comparison of data as well as the error values. The code shown below creates the graphic shown above. You can copy the entire block and ...",t:"Error Plots"},"2397":{i:0.000247611051377031,u:"../Content/GUInavigation/contour_plots_gallery.htm",a:"Contour Plots Contours on an Image Filled Contours Map with Contours Surface with Contour Lines  Long Example - Stacked Surfaces and Contours See Also ",t:"Contour Plots"},"2398":{i:8.31930049024425E-05,u:"../Content/GuideMe/ImageGuideMe/ImageWithContour.htm",a:"You can quickly display image data with contour data overlays, as shown in the example below. The IMAGE and CONTOUR functions allow you to quickly display images and contours and define how you want them to appear. The example shown below displays elevation data as both an image and a contour. The ...",t:"Contours on an Image"},"2399":{i:7.00386025132918E-05,u:"../Content/GuideMe/ContourGuideMe/contourFill.htm",a:"You can enhance contour graphics by displaying different levels of the contour and filling them with color. In this topic, we will use the CONTOUR function along with various keywords to demonstrate some of the capabilities of CONTOUR. For additional examples using CONTOUR, see the Environmental ...",t:"Filled Contours"},"2400":{i:8.40699650617192E-05,u:"../Content/GuideMe/ImageGuideMe/mapContour.htm",a:"You can enhance map graphics by overplotting contour data to show more detail. In this topic, we will use the IMAGE function along with the CONTOUR function using global cloud data. The code shown below creates the graphic shown above. You can copy the entire block and paste it into the IDL command ...",t:"Map with Contours"},"2401":{i:0.000144287288397435,u:"../Content/GuideMe/SurfaceGuideMe/surfaceContour.htm",a:"You can enhance surface graphics by overplotting contour data to show more detail. In this topic, we will show two examples of using the SURFACE function along with the CONTOUR to display gravity and elevation data. For an additional example using SURFACE, see Plot 3D Terrain and Water Table . ...",t:"Surface with Contour Lines"},"2402":{i:0.000160882664412746,u:"../Content/GuideMe/LongExamples/EnvMonitoring/EM1_SurfacePlot.htm",a:"In this topic we explore how to combine two different SURFACE plots with POLYLINE and SCATTERPLOT3D to further characterize the study area. We use the same data as in the topic \" Model the Study Area and Setting ,\" but view the data as three-dimensional surfaces rather than a two-dimensional contour ...",t:"Plot 3D Terrain and Water Table"},"2403":{i:0.000247611051377031,u:"../Content/GUInavigation/images_gallery.htm",a:"Images Binary Image Data Contours on an Image Image with a Map Projection  Map Image Saving Images as KML Files Viewing an Image See Also ",t:"Images"},"2404":{i:0.000139997413999398,u:"../Content/GuideMe/ImageGuideMe/ViewAnImage.htm",a:"You can quickly open image files to view within the IDL Workbench. Follow the steps below, and use the referenced material below for the next steps you might want to take after viewing the image. Steps to viewing an image Viewing an image in IDL is a simple process that you can accomplish from the ...",t:"Viewing an Image"},"2405":{i:6.91616423540151E-05,u:"../Content/GuideMe/ImageGuideMe/ImageFromData.htm",a:"Display Binary Data If your image data is in a nonstandard image format, you can use the READ_BINARY routine to read binary information from the file. Example 1 - Binary Data The following example reads byte data out of the file nyny.dat in IDL\u0027s examples/data subdirectory into an IDL variable named ...",t:"Binary Image Data"},"2406":{i:8.31930049024425E-05,u:"../Content/GuideMe/ImageGuideMe/image_map.htm",a:"You can easily view a map image using IDL\u0027s IMAGE function. This topic shows how to display a simple map image, then explains how to add image registration so that you can warp the image to a map projection. The following examples use an image of world cloud data. (This example data is available in ...",t:"Map Images"},"2407":{i:7.083531395332E-05,u:"../Content/GuideMe/ImageGuideMe/SaveKML.htm",a:"If you create an Image graphic by projecting a graphic file onto a map, you can convert the IDL graphic into other graphic types, including the Open Geospatial Consortium\u0027s Keyhole Markup Language (KML). KML is an XML-based schema that visualizes geographic data and annotations on Internet-based ...",t:"Save Images as KML Files"},"2408":{i:0.00011480246376906,u:"../Content/GuideMe/ImageGuideMe/ImageWithMapProjection.htm",a:"This example demonstrates how to download a map image from OpenStreetMap and display the image in the correct map projection. Download a Map Use the IDLnetURL object to create a map using the OpenStreetMap staticMapLite API, then save the map image as a PNG: url = ...",t:"Image with a Map Projection"},"2409":{i:0.000247611051377031,u:"../Content/GUInavigation/image_analysis_gallery1.htm",a:"Image Analysis Image Types Image Filters Resize Image Arrays Shift Image Arrays Scale and Rotate Image Arrays Detect Edges Smooth Edges Sharpen Edges Image Thresholding Fast Fourier Transform See Also ",t:"Image Analysis"},"2410":{i:6.65307618761849E-05,u:"../Content/GuideMe/ImageProcessing/Image Types.htm",a:"Various kinds of images can be displayed in IDL. This list describes them: Binary Images — Binary images contain only two values (off or on). The off value is usually 0 and the on value is usually 1. This type of image is commonly used as a multiplier to mask regions within another image. Grayscale ...",t:"Image Types"},"2411":{i:7.3484081986562E-05,u:"../Content/GuideMe/ImageProcessing/Image Filters.htm",a:"Image Filters  ",t:"Image Filters"},"2412":{i:6.54429618845965E-05,u:"../Content/GuideMe/ImageProcessing/LowPassFilter.htm",a:"A low pass filter is the basis for most smoothing methods. An image is smoothed by decreasing the disparity between pixel values by averaging nearby pixels. Using a low pass filter tends to retain the low frequency information within an image while reducing the high frequency information. An example ...",t:"Low Pass Filtering"},"2413":{i:6.54429618845965E-05,u:"../Content/GuideMe/ImageProcessing/HighPassFilter.htm",a:"A high pass filter is the basis for most sharpening methods. An image is sharpened when contrast is enhanced between adjoining areas with little variation in brightness or darkness. A high pass filter tends to retain the high frequency information within an image while reducing the low frequency ...",t:"High Pass Filtering"},"2414":{i:7.88597315087245E-05,u:"../Content/GuideMe/ImageProcessing/DirectionalFilters.htm",a:"A directional filter is an edge detector that can be used to compute the first derivatives of an image. The first derivatives (or slopes ) are most evident when a large change occurs between adjacent pixel values. Directional filters can be designed for any direction within a given space. For ...",t:"Apply Directional Filters"},"2415":{i:7.88597315087245E-05,u:"../Content/GuideMe/ImageProcessing/LaplacianFilters.htm",a:"A Laplacian filter is an edge detector used to compute the second derivatives of an image, measuring the rate at which the first derivatives change. This determines if a change in adjacent pixel values is from an edge or continuous progression. Laplacian filter kernels usually contain negative ...",t:"Apply Laplacian Filters"},"2416":{i:6.54429618845965E-05,u:"../Content/GuideMe/ImageProcessing/RemovingNoise.htm",a:"Sensors that capture images can introduce noise (extraneous information). So before you can properly analyze an image, you may need to filter out the noise. IDL provides several ways to filter images . Within the frequency domain, windowing is a filter is applied to an image by multiplying the Fast ...",t:"Noise Filter"},"2417":{i:7.34695647046241E-05,u:"../Content/GuideMe/ImageProcessing/ResizingImageArrays.htm",a:"You can shrink or expand one-, two-, or three-dimensional image arrays using the CONGRID and REBIN functions. CONGRID resizes an array by any arbitrary amount, and REBIN resizes by an integer multiple of the original dimensions. For more information on how these functions work, see How Image Arrays ...",t:"Resize Image Arrays"},"2418":{i:6.65307618761849E-05,u:"../Content/GuideMe/ImageProcessing/ShiftingImageArrays.htm",a:"Sometimes image files are saved with array elements offset. You can correct for the offsets using the SHIFT function as long as you know the amounts of the vertical and horizontal offsets. Use the SHIFT function to move elements of a vector or array along any dimension. Since all shifts are ...",t:"Shift Image Arrays"},"2419":{i:6.65307618761849E-05,u:"../Content/GuideMe/ImageProcessing/Zoom and Rotate an Image.htm",a:"The following example displays an original image (left) and uses methods to scale and rotate the visualization (right).  Copy these lines and paste them into the IDL command line to run: ; Select the file. file = FILEPATH(\u0027galaxy.dat\u0027, $ SUBDIRECTORY=[\u0027examples\u0027, \u0027data\u0027])  ; Use the READ_BINARY ...",t:"Scale and Rotate  Images"},"2420":{i:0.000173627515350592,u:"../Content/GuideMe/ImageProcessing/DetectEdges.htm",a:"Detecting edges is another way to extract features. Many edge detection methods use directional or Laplacian filters. IDL provides the following edge detection routines: EDGE_DOG EMBOSS LAPLACIAN PREWITT ROBERTS SHIFT_DIFF SOBEL The results of these routines can be added or subtracted from the ...",t:"Detect Edges"},"2421":{i:7.58018553566877E-05,u:"../Content/GuideMe/ImageProcessing/SmoothImages.htm",a:"Smoothing is used to reduce noise or to produce a less pixelated image. Most smoothing methods are based on low-pass filters, but you can also smooth an image using an average or median value of a group of pixels (a kernel ) that moves through the image. The following example uses the SMOOTH and ...",t:"Smooth Images"},"2422":{i:7.58018553566877E-05,u:"../Content/GuideMe/ImageProcessing/SharpenImages.htm",a:"Sharpening an image typically involves a high-pass filter to increase the contrast between bright and dark regions to better reveal features. The following kernel is an example of a high-pass filter used to sharpen an image. This is just one example; other filters may include more weighting for the ...",t:"Sharpen Images"},"2423":{i:8.85176307743557E-05,u:"../Content/GuideMe/ImageProcessing/ImageThresholding.htm",a:"Image thresholding is a simple form of image segmentation. It is a way to create a binary image from a grayscale or full-color image. This is typically done in order to separate \"object\" or foreground pixels from background pixels to aid in image processing. In this example, you will use ...",t:"Image Thresholding"},"2424":{i:0.000183724830172839,u:"../Content/GuideMe/ImageProcessing/FFTReduceBackgroundNoise.htm",a:"The Fast Fourier Transform (FFT) is used to transform an image from the spatial domain to the frequency domain, most commonly to reduce background noise from the image. The following example shows how to remove background noise from an image of the M-51 whirlpool galaxy, using the following steps: ...",t:"Fast Fourier Transform"},"2425":{i:0.000157774100477241,u:"../Content/GuideMe/ImageProcessing/BackgroundFastFourierTransform.htm",a:"In image processing, the most common way to represent pixel location is in the spatial domain by column ( x ), row ( y ), and z (value). But sometimes image processing routines may be slow or inefficient in the spatial domain, requiring a transformation to a different domain that offers compression ...",t:"Fast Fourier Transform (FFT) Background"},"2426":{i:0.000247611051377031,u:"../Content/GUInavigation/maps_gallery.htm",a:"Maps BUBBLEPLOT on a Map Map Boundaries Map Image Map Projections Map with Contours See Also ",t:"Maps"},"2427":{i:7.59314547895663E-05,u:"../Content/GuideMe/ImageGuideMe/mapProjections.htm",a:"IDL\u0027s MAP function allows you to view more than 30 different map projections. This topic shows how to use the MAP function to view projections, and how to warp a map image to a map projection. Map Projections Example The following graphics are a sample of the map projections available in IDL.  The ...",t:"Map Projections"},"2428":{i:7.4938431668306E-05,u:"../Content/GuideMe/ImageGuideMe/MappingContinents.htm",a:"You can display map boundaries such as continents, countries, states, rivers and lakes on a map or map projection. The following examples show the basics of how to use the MAPCONTINENTS function to display these boundaries. Polar Map Showing Continents and Countries The code shown below creates the ...",t:"Map Boundaries"},"2429":{i:0.000247611051377031,u:"../Content/GUInavigation/surfaces_gallery.htm",a:"Surfaces Global Digital Elevation Model Surfaces Surface with Contour Lines Long Example - Stacked Surfaces and Contours See Also ",t:"Surfaces"},"2430":{i:0.000131723025597208,u:"../Content/GuideMe/SurfaceGuideMe/surfaces.htm",a:"You can create surface graphics using the SURFACE function. In this topic, we will use the SURFACE function  using elevation data taken from the Maroon Bells area of the Rocky Mountains in Colorado. For an additional example using SURFACE, see \" Plot 3D Terrain and Water Table .\" The following ...",t:"Surface Graphics"},"2431":{i:7.10408426953223E-05,u:"../Content/GuideMe/SurfaceGuideMe/surface_world.htm",a:"The example below shows how to display a digital elevation model (DEM) on an image and display it as a three-dimensional globe. The code shown below creates the graphic shown above. Copy the code below and paste it into a new file in the IDL editor, then compile and run it. PRO WORLD_SURF  ; Read ...",t:"Global Digital Elevation Model             "},"2432":{i:0.000247611051377031,u:"../Content/GUInavigation/vectors_gallery.htm",a:"Vectors and Streamlines Streamline Vectors Vectors Long Examples - Aquifer Flow See Also ",t:"Vectors and Streamlines"},"2433":{i:7.21972736745883E-05,u:"../Content/GuideMe/VectorGuideMe/Vectors.htm",a:"The VECTOR function allows you to draw vectors in a graphic. The following example displays wind vector data over a map with continental outlines. For an additional example using VECTOR, see Plot Relative Aquifer Flow Vectors in the Environmental Monitoring Long Example . The following code creates ...",t:"Vectors"},"2434":{i:8.84605184769989E-05,u:"../Content/GuideMe/VectorGuideMe/Streamlines.htm",a:"The STREAMLINE function allows you to draw streamlines in a graphic. The following example displays streamlines of global wind vector data over a global map with continental outlines. The code shown below creates the graphic shown above. You can copy the entire block and paste it into the ...",t:"Streamline Vectors"},"2435":{i:0.000128679629824488,u:"../Content/GuideMe/LongExamples/EnvMonitoring/EM1_FlowVectors.htm",a:"An additional characteristic of the site we could characterize is the relative flow rates of the of the aquifer across the study area. This example uses GRIDDATA and CONTOUR to generate the base terrain map, over which we lay a VECTOR plot of the aquifer flow rates. Your final plot should look ...",t:"Plot Relative Aquifer Flow Vectors"},"2436":{i:0.000247611051377031,u:"../Content/GUInavigation/modifying_vis_gallery.htm",a:"Axes Axis References in IDL Graphics Changing Graphics Properties Circles and Ovals Colorbars Graphics Annotations Fonts and Colors Formatting IDL Colors, Graphics Symbols, and Lines Legends Generate Code Lines and Arrows Mathematical Symbols and Greek Letters Multi-sided Shapes Text and Symbols See ...",t:"Modifying Visualizations"},"2437":{i:0.000121048462622988,u:"../Content/GuideMe/Axes.htm",a:"You can add or change axes in graphics. The examples on this page include adding axes to an image and adding and changing the properties of an axis on a three-dimensional contour graphic. Add Axes to an Image Axes on an image help illustrate the dimensions (number of pixels) in each direction, as ...",t:"Axes"},"2438":{i:0.00020260974003996,u:"../Content/GuideMe/AxesInGraphics.htm",a:"Each Axis in an IDL Graphic has a numeric reference that can be used to modify its properties after a graphic\u0027s creation. This topic presents the axis references for both two and three-dimensional graphics. Axis References for Two-Dimensional Graphics Each axis in a two-dimensional graphic is ...",t:"Axis References in IDL Graphics"},"2439":{i:0.00107795616903982,u:"../Content/GuideMe/propChanges.htm",a:"You can easily change graphics properties either from the command line or inside of the graphics window after the graphics are initially created. This topic discusses the use of the command line to quickly try a different color, text size, or line thickness in your graphics. Some graphic properties ...",t:"Change Graphics Properties"},"2440":{i:7.67649569660617E-05,u:"../Content/GuideMe/ellipses.htm",a:"Use the ELLIPSE function to draw a circle or oval shape on an existing graphic. You can use ELLIPSE at the time you create the graphic, or from the command line after the graphic is displayed. The example shows an image of Mars with a circle around a crater in the middle. The code shown below ...",t:"Circles and Ovals"},"2441":{i:6.93085614555098E-05,u:"../Content/GuideMe/Colorbars.htm",a:"You can add a colorbar to a graphic. Colorbars show  the minimum to maximum pixel values on a color scale. See the following sections: Example: DEM Example: Discrete Contour Levels with Colorbar Example: Two Contour Plots with One Colorbar Properties Used in the Examples Resources Example: DEM The ...",t:"Colorbars"},"2442":{i:9.00693331785713E-05,u:"../Content/Creating IDL Programs/Fonts and Colors.htm",a:"Fonts and Colors ",t:"Fonts and Colors"},"2443":{i:0.000765959980983572,u:"../Content/Creating IDL Programs/Appendices/Using_Device_Fonts.htm",a:"Device, or hardware, fonts are fonts that are provided directly by your system’s hardware or by software other than IDL. In past releases of IDL, we have used the term “ hardware fonts ” extensively to discuss these types of fonts. This is because in the early days of IDL, computer displays were ...",t:"Using Device Fonts"},"2444":{i:0.000102846476153942,u:"../Content/Creating IDL Programs/Appendices/Using_Hershey_Vector_Fon.htm",a:"The Hershey vector fonts used by IDL were digitized by Dr. A.V. Hershey of the Naval Weapons Laboratory. Characters in the vector fonts are stored as equations, and can be scaled and rotated in three dimensions. They are drawn as lines on the current graphics device, and are displayed quickly and ...",t:"Using Hershey Vector Fonts"},"2445":{i:0.000119782968838588,u:"../Content/Creating IDL Programs/Appendices/Using_TrueType_Fonts.htm",a:"IDL includes the following TrueType fonts: Font Family Italic Bold Bold Italic Courier Courier Italic Courier Bold Courier Bold Italic Helvetica Helvetica Italic Helvetica Bold Helvetica Bold Italic Times Times Italic Times Bold Times Bold Italic Symbol    Monospace Symbol    DejaVuSans    Using ...",t:"Using TrueType Fonts"},});