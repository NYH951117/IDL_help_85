define({"2791":{i:0.000501299403461008,u:"../Content/Connectivity Bridges/ImportToIDL - COM Objects/IDLcomIDispatchObjectNamingScheme.htm",a:"When you create an IDLcomIDispatch object, IDL automatically creates a dynamic subclass of the IDLcomIDispatch class to contain the COM object. IDL determines which COM object to instantiate by parsing the class name you provide to the OBJ_NEW function. You specify the COM object to use by creating ...",t:"IDLcomIDispatch Object Naming Scheme"},"2792":{i:0.000218161499902734,u:"../Content/Connectivity Bridges/ImportToIDL - COM Objects/ManagingCOMObjectProperties.htm",a:"As a convenience to the IDL programmer, COM object methods that have been defined using the propget and propput attributes are accessible via the IDLcomIDispatch object’s GetProperty and SetProperty methods. This means that rather than calling the COM object’s methods directly to get and set ...",t:"Managing COM Object Properties"},"2793":{i:0.000218161499902734,u:"../Content/Connectivity Bridges/ImportToIDL - COM Objects/MethodCallsOnIDLcomIDispatchObjects.htm",a:"IDL allows you to call the underlying COM object’s methods by calling methods on the IDLcomIDispatch object. IDL handles conversion between IDL data types and the data types used by the component, and any results are returned in IDL variables of the appropriate type. As with all IDL objects, the ...",t:"Method Calls On IDLcomIDispatch Objects"},"2794":{i:5.54698778904798E-05,u:"../Content/Connectivity Bridges/ImportToIDL - COM Objects/PassingParameterArraysByReference.htm",a:"By default, IDL arrays are passed to and received from the COM subsystem “by value”, meaning the array is copied. When dealing with large arrays or a large number of arrays, performance may suffer due to the by value passing scheme. However, you can implement “by reference” array passing, which ...",t:"Passing Parameter Arrays By Reference"},"2795":{i:0.000156251792838756,u:"../Content/Connectivity Bridges/ImportToIDL - COM Objects/ReferencesToOtherCOMObjects.htm",a:"It is not uncommon for COM objects to return references to other COM objects, either as a property value or via an object method. If an IDLcomIDispatch object returns a reference to another COM object’s IDispatch interface, IDL automatically creates an IDLcomIDispatch object to contain the object ...",t:"References To Other COM Objects"},"2796":{i:0.000275658004972215,u:"../Content/Connectivity Bridges/ImportToIDL - ActiveX Controls/AboutUsingActiveXControls.htm",a:"If you want to incorporate a COM object that presents a user interface (that is, an ActiveX control) into your IDL application, use IDL’s WIDGET_ACTIVEX routine to place the control in an IDL widget hierarchy. IDL provides the same object method and property manipulation facilities for ActiveX ...",t:"About Using ActiveX Controls"},"2797":{i:5.54698778904798E-05,u:"../Content/Connectivity Bridges/ImportToIDL - ActiveX Controls/ActiveXControlNamingScheme.htm",a:"When you incorporate an ActiveX control into an IDL widget hierarchy using the WIDGET_ACTIVEX routine, IDL automatically creates an IDLcomActiveX object that instantiates the control and handles all communication between it and IDL. You tell IDL which ActiveX control to instantiate by passing the ...",t:"ActiveX Control Naming Scheme"},"2798":{i:9.08319457179905E-05,u:"../Content/Connectivity Bridges/ImportToIDL - ActiveX Controls/ActiveXWidgetEvents.htm",a:"Events generated by an ActiveX control are dispatched using the standard IDL widget methodology. When an ActiveX event is passed into IDL, it is packaged in an anonymous IDL structure that contains the ActiveX event parameters. While the actual structure of an event generated by an ActiveX control ...",t:"ActiveX Widget Events"},"2799":{i:5.54698778904798E-05,u:"../Content/Connectivity Bridges/ImportToIDL - ActiveX Controls/CreatingActiveXControls.htm",a:"To include an ActiveX control in an IDL application, use the WIDGET_ACTIVEX function, supplying the COM class or program ID of the ActiveX control as the COM_ID argument. If the object you want to use in your IDL application is not an ActiveX control, use the IDLcomIDispatch object class as ...",t:"Creating ActiveX Controls"},"2800":{i:5.54698778904798E-05,u:"../Content/Connectivity Bridges/ImportToIDL - ActiveX Controls/DestroyingActiveXControls.htm",a:"An ActiveX control incorporated in an IDL widget hierarchy is destroyed when any of the following occurs: When the widget hierarchy to which the ActiveX widget belongs is destroyed. When a call to WIDGET_CONTROL, wAx, /DESTROY is made, where wAx is the widget ID of the ActiveX widget. When the ...",t:"Destroying ActiveX Controls"},"2801":{i:5.54698778904798E-05,u:"../Content/Connectivity Bridges/ImportToIDL - ActiveX Controls/ExampleCalendarControl.htm",a:"This example uses an ActiveX control that displays a calendar interface. The control, contained in the file mscal.ocx , is installed along with a typical installation of Microsoft Office 97, and may also be present on your system if you have upgraded to a more recent version of Microsoft Office. If ...",t:"Example Calendar Control"},"2802":{i:5.54698778904798E-05,u:"../Content/Connectivity Bridges/ImportToIDL - ActiveX Controls/ExampleSpreadsheetControl.htm",a:"This example uses an ActiveX control that displays a spreadsheet interface. The control, contained in the file msowc.dll , is installed along with a typical installation of Microsoft Office. If the control is not present on your system (you’ll know the control is not present if the example code ...",t:"Example Spreadsheet Control"},"2803":{i:6.72572338329834E-05,u:"../Content/Connectivity Bridges/ImportToIDL - ActiveX Controls/ManagingActiveXControlProperties.htm",a:"As a convenience to the IDL programmer, ActiveX control methods that have been defined using the propget and propput attributes are accessible via the IDLcomActiveX object’s GetProperty and SetProperty methods, which are inherited directly from the IDLcomIDispatch object class. This means that ...",t:"Managing ActiveX Control Properties"},"2804":{i:6.72572338329834E-05,u:"../Content/Connectivity Bridges/ImportToIDL - ActiveX Controls/MethodCallsOnActiveXControls.htm",a:"IDL allows you to call the underlying ActiveX control’s methods by calling methods on the IDLcomActiveX object that is automatically created when you call the WIDGET_ACTIVEX function. IDL handles conversion between IDL data types and the data types used by the component, and any results are returned ...",t:"Method Calls On ActiveX Controls"},"2805":{i:7.57491121270495E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - Connector Objects/AboutTheIDLConnectorObject.htm",a:"The pre-built IDL connector export object that is shipped with the IDL distribution lets you quickly incorporate the processing power of IDL into an application developed in an external, object-oriented environment such as COM or Java. The connector object definition provides the basis for a ...",t:"About The IDL Connector Object"},"2806":{i:0.000114007465989746,u:"../Content/Connectivity Bridges/ExportFromIDL - Connector Objects/PreparingToUseTheIDLConnectorObject.htm",a:"All of the files needed to use a connector object are provided in the IDL distribution. You can locate the files in the following directory locations where IDL_DIR is where you have installed IDL: Files File Descriptions COM Resource files: COM_IDL_connect.dll COM_IDL_connect.tlb are located in ...",t:"Preparing To Use The IDL Connector Object"},"2807":{i:9.54316218675418E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - Connector Objects/UsingTheConnectorObject.htm",a:"Using The Connector Object This section discusses how to use the pre-built connector object that is included in the IDL distribution in COM and Java applications. About the IDL Connector Object Preparing to Use the IDL Connector Object Connector Object COM Examples Connector Object Java Examples ",t:"Using The Connector Object"},"2808":{i:7.57491121270495E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - Connector Objects/ConnectorObjectCOMExamples.htm",a:"The following examples show how to use the connector object in Visual Basic .NET Console and Windows applications. These examples contain important information about how to access messages sent from IDL in a COM application and how to communicate with the IDL process. In COM clients, the IDL output ...",t:"Connector Object COM Examples"},"2809":{i:7.69321406084608E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - Connector Objects/HelloWorldExamplewithaCOMConnectorObject.htm",a:"To create a Visual Basic .NET console application using the connector object wrapper methods to print “Hello World” in a console application window, complete the following steps: Create a new Visual Basic .NET console application and add a reference to the COM_IDL_connectLib 1.0 Type Library . ...",t:"Hello World Example with a COM Connector Object"},"2810":{i:0.00024943130933882,u:"../Content/Connectivity Bridges/ExportFromIDL - Connector Objects/DataManipulationwithaCOMConnectorObject.htm",a:"The following Visual Basic .NET example creates two arrays and passes them to IDL using the SetIDLVariable method. An ExecuteString command then multiplies the two arrays and GetIDLVariable returns the result to the COM application. The product of the array multiplication is printed to the console ...",t:"Data Manipulation with a COM Connector Object"},"2811":{i:0.00024943130933882,u:"../Content/Connectivity Bridges/ExportFromIDL - Connector Objects/IDLCommandLinewithaCOMConnectorObject.htm",a:"The following example creates a simple Windows application in Visual Basic .NET that includes two text boxes. An IDL command typed in the top textbox is passed to the IDL process through the use of the ExecuteString method. Command output and any error messages are printed in the bottom textbox. To ...",t:"IDL Command Line with a COM Connector Object"},"2812":{i:0.000225048529146365,u:"../Content/Connectivity Bridges/ExportFromIDL - Connector Objects/ConnectorObjectJavaExamples.htm",a:"The following examples introduce the capabilities of the Java connector object: Hello World Example with a Java Connector Object Data Manipulation with a Java Connector Object IDL Command Line with Java Connector Object The Java class files needed for the Export Bridge are found in the ...",t:"Connector Object Java Examples"},"2813":{i:9.37282317531757E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - Connector Objects/HelloWorldExamplewithaJavaConnectorObject.htm",a:"To create a Java application that uses the connector object’s executeString method to print “Hello World” in the command window, complete the following steps. The file for this example, hello_example.java , is located in the examples/doc/bridges/java subdirectory of the IDL distribution. Open the ...",t:"Hello World Example with a Java Connector Object"},"2814":{i:0.000144403113091707,u:"../Content/Connectivity Bridges/ExportFromIDL - Connector Objects/DataManipulationwithaJavaConnectorObject.htm",a:"The following Java example creates two arrays and passes them to IDL using the setIDLVariable method. An executeString command then multiplies the two arrays and getIDLVariable returns the result to the java application. The product of the array multiplication is printed to the command window. The ...",t:"Data Manipulation with a Java Connector Object"},"2815":{i:0.000144403113091707,u:"../Content/Connectivity Bridges/ExportFromIDL - Connector Objects/IDLCommandLinewithJavaConnectorObject.htm",a:"The following example creates a simple Java application that includes two text boxes. An IDL command typed in the top textbox is passed to the IDL process through the use of the executeString method. Command output and any error messages are printed in the bottom textbox. The file for this example, ...",t:"IDL Command Line with Java Connector Object"},"2816":{i:9.20598649135077E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - Export Bridge Assistant/ExportBridgeAssistantOverview.htm",a:"The Export Bridge technology lets an IDL object be accessed from Java or COM through the use of wrapper objects. The Export Bridge Assistant helps to automate the process of creating the Java or COM wrapper object from the IDL source object. The Assistant obtains as much information as possible ...",t:"Export Bridge Assistant Overview"},"2817":{i:0.000198567341526735,u:"../Content/Connectivity Bridges/ExportFromIDL - Export Bridge Assistant/RunningTheAssistant.htm",a:"Running The Assistant Start the Export Bridge Assistant from the IDL Workbench by entering the command IDLEXBR_ASSISTANT at the IDL command line. For more information, see “IDLEXBR_ASSISTANT” (IDL Reference Guide). ",t:"Running The Assistant"},"2818":{i:8.32487938169334E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - Export Bridge Assistant/BuildingAnObject.htm",a:"To build a wrapper object, you need to create an object specification about the exported object in the Export Bridge Assistant. This wrapper object is what your client application needs to use the IDL source object’s functionality. Note that the wrapper object is only an interface between your ...",t:"Building An Object"},"2819":{i:9.74011098283777E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - Export Bridge Assistant/ExportingAnObject.htm",a:"The Assistant lets you set data types for parameters and other values needed for creation of the wrappers. In addition, the interface for the Assistant indicates visually the progress made so far. The icons representing properties, methods, and parameters in the assistant indicate the following: ...",t:"Exporting An Object"},"2820":{i:0.000276667889957688,u:"../Content/Connectivity Bridges/ExportFromIDL - Export Bridge Assistant/ExportingASourceObjectsSuperclasses.htm",a:"You might want to set properties or call methods that are implemented in the superclass of the source object. The Assistant interrogates the IDL source object to obtain the properties, methods and method parameters. It also uses the OBJ_CLASS method to obtain the superclasses of the source object ...",t:"Exporting a Source Object\u0027s Superclasses"},"2821":{i:0.000407004154848521,u:"../Content/Connectivity Bridges/ExportFromIDL - Export Bridge Assistant/InformationSkippedDuringExport.htm",a:"The Assistant skips certain information when creating an object specification for exporting because such information is unnecessary or unavailable for a wrapper object. Lifecycle Methods The lifecycle methods of the IDL source object, Init and Cleanup, are not presented in the list of methods to ...",t:"Information Skipped During Export"},"2822":{i:0.000156822821803322,u:"../Content/Connectivity Bridges/ExportFromIDL - Export Bridge Assistant/ModifyingASourceObjectAfterExport.htm",a:"Modifications to the IDL source object can affect the operation of an existing wrapper object even if the wrapper is not rebuilt because the wrapper object uses the source object in its current state, not a state cached at the time the Assistant generates the wrapper object. In general: Adding ...",t:"Modifying a Source Object After Export"},"2823":{i:0.00146149004071756,u:"../Content/Connectivity Bridges/ExportFromIDL - Export Bridge Assistant/SpecifyingInformationForExporting.htm",a:"When the Assistant creates a new project, it supplies default values for the attributes that must be specified. Most of these values are set to UNSPECIFIED to indicate that you must modify this attribute. Some attributes do not have a default value because there is no reasonable one; also, supplying ...",t:"Specifying Information For Exporting"},"2824":{i:0.000196085959885924,u:"../Content/Connectivity Bridges/ExportFromIDL - Export Bridge Assistant/UsingTheAssistant.htm",a:"You can use the Export Bridge Assistant to create COM or Java wrapper objects from native IDL objects. The Assistant is a system-wide dialog; for information on launching it, see Running the Assistant . The image above shows the Assistant when it is first launched, without a project open. ...",t:"Using The Export Bridge Assistant"},"2825":{i:8.32487938169334E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - Export Bridge Assistant/WorkingWithAProject.htm",a:"The Export Bridge Assistant works with a project that contains an IDL source object to be exported. You can create a new project or open an existing one, modify or update it, and save it. Opening a Project If you are creating a new project, you have the choice of making it COM or Java. For both ...",t:"Working With A Project"},"2826":{i:0.000510655719948788,u:"../Content/Connectivity Bridges/ExportFromIDL - Export Bridge Assistant/WrapperGenerationExample.htm",a:"The following example exports a simple IDL object that has no properties or methods and demonstrates the configuration necessary to initialize a COM or Java client application to use the exported object. First, create the IDL source object. Create a file named helloworld__define.pro (within your IDL ...",t:"Wrapper Generation Example"},"2827":{i:5.54698778904798E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - IDL Objects/OverviewOfExportingIDLObjects.htm",a:"IDL’s Export Bridge technology allows you to easily integrate IDL technology into external environments using the latest component based frameworks and technology. Unlike the Callable IDL interface, which lets you create applications that exchange data with IDL through IDL variables and issue ...",t:"Overview Of Exporting IDL Objects"},"2828":{i:0.00146116420119467,u:"../Content/Connectivity Bridges/ExportFromIDL - IDL Objects/ConfiguringBuildAndClientMachines.htm",a:"This section describes how to configure the following: Build machines that run the Export Bridge Assistant Build machines that use the wrapper objects created by the Assistant in an external development environment (if different) Client machines running applications that rely on wrapper objects As a ...",t:"Configuring Build And Client Machines"},"2829":{i:7.04379520238199E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - IDL Objects/DrawableObjectCanvasExamples.htm",a:"The following examples use the three object classes as canvases for drawable objects. You can use them with the Export Bridge by following the procedure described in Java Wrapper Example or use them with the Export Bridge Assistant (for more information, see Using the Export Bridge Assistant ). For ...",t:"Drawable Object Canvas Examples"},"2830":{i:5.54698778904798E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - IDL Objects/EventHandling.htm",a:"There are three main types of events that the clients of wrapper objects care about: user-interface events (e.g., mouse click and mouse move), IDL output, and IDL notifications. User-interface events are only available for drawable wrapper objects. The IDL output and notifications are available for ...",t:"Event Handling"},"2831":{i:0.000396917733999103,u:"../Content/Connectivity Bridges/ExportFromIDL - IDL Objects/ExportingDrawableObjects.htm",a:"If you want to create a COM or Java application that uses a drawable wrapper object, you must subclass your IDL object from one of the following object classes before generating the wrapper: IDLgrWindow — provides a canvas for graphic objects IDLitWindow — provides a canvas for iTool visualizations ...",t:"Exporting Drawable Objects"},"2832":{i:0.000615529140301387,u:"../Content/Connectivity Bridges/ExportFromIDL - IDL Objects/IDLAccess.htm",a:"Calling a method or accessing a property on a wrapper object instance calls into the underlying IDL object’s method or property. Each wrapper object is associated with an IDL process, controlled by the IDL main process, by giving it a process name during wrapper creation by the Export Bridge ...",t:"IDL Access"},"2833":{i:7.73998492872597E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - IDL Objects/ObjectLifecycle.htm",a:"Object lifecycle means the duration in which an object is valid for use between the time it is instantiated or created and then released or destroyed. There are two lifecycles to understand when dealing with the Export Bridge’s wrapper objects: the lifecycle of an instance of the wrapper object and ...",t:"Object Lifecycle"},"2834":{i:0.000111796188286103,u:"../Content/Connectivity Bridges/ExportFromIDL - IDL Objects/OverviewOfWritingIDLObjectsForExporting.htm",a:"The objects you write in IDL can, in the vast number of cases, take full advantage of the Export Bridge technology, with only a few of IDL’s capabilities not available. In addition, due to limitations imposed by external environments (COM and Java), certain restrictions exist for the method ...",t:"Overview Of Writing IDL Objects For Exporting"},"2835":{i:0.000353311163126831,u:"../Content/Connectivity Bridges/ExportFromIDL - IDL Objects/ParameterPassingAndTypeConversion.htm",a:"The following topics contain important information that must be kept in mind when passing objects, arrays and variables between IDL and an external programming environment: Object Reference Use Array Order Conversion Type Conversion Object Reference Use It is possible to pass an object reference to ...",t:"Parameter Passing And Type Conversion"},"2836":{i:5.54698778904798E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - IDL Objects/ProgrammingLimitations.htm",a:"This section discusses the programming limitations required by the Export Bridge technology for successfully generating wrapper objects. Keyword Parameters Because COM and Java don’t support the concept of keyword parameters, the Export Bridge does not support IDL keyword parameters in method ...",t:"Programming Limitations"},"2837":{i:0.000488847976885424,u:"../Content/Connectivity Bridges/ExportFromIDL - IDL Objects/SupportedPlatformsAndIDLModes.htm",a:"The IDL Export Bridge technology is available on the following platforms: Feature Windows OS X Linux Solaris 32-bit 64-bit 32-bit 32-bit 64-bit 32-bit 64-bit COM Object –Export (via\nExport Bridge Assistant) • •      Java Object –Export (via Export\nBridge Assistant) • • • a • • • • a - Graphical Java ...",t:"Supported Platforms And IDL Modes"},"2838":{i:7.11863524804846E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - IDL Objects/WrapperObjects.htm",a:"The main concept used when exporting IDL objects for use in a client application is that of a wrapper object. A wrapper object is a native-language object (COM or Java) that exposes an IDL object’s behavior to a client. The client interacts with an instance of the wrapper object using ...",t:"Wrapper Objects"},"2839":{i:7.72315231146437E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - Java Objects/OverviewOfJavaExportObjects.htm",a:"Once you have chosen to use a connector object or have exported a custom IDL source object using the Assistant, use the method and event reference information described here to create an instance of the object and interact with the IDL process from an external Java environment. This chapter presents ...",t:"Overview Of Java Export Objects"},"2840":{i:7.65360833345093E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - Java Objects/JavaWrapperObjects.htm",a:"There are two different types of objects created by the Java Export Bridge: drawable and non-drawable. Drawable wrapper objects contain a Java AWT Canvas object to which IDL draws. These wrapper objects inherit from the JIDLCanvas object. Nondrawable objects provide an interface between Java and IDL ...",t:"Java Wrapper Objects"},"2841":{i:0.000175082982300574,u:"../Content/Connectivity Bridges/ExportFromIDL - Java Objects/EventHandling.htm",a:"Events in Java are handled by registered listener objects (often referred to as the Observer design pattern). The object interested in listening to a given event must implement the proper Java interface and then register to receive the events. Any Java object can register to listen to any other ...",t:"Java Event Handling"},"2842":{i:0.000209757097436805,u:"../Content/Connectivity Bridges/ExportFromIDL - Java Objects/ErrorHandling.htm",a:"When an error occurs in a Java wrapper object, it throws an unchecked exception of type JIDLException (or a subclass of JIDLException), which means that calls into a wrapper object should be wrapped in try-catch blocks, as is standard in Java. JIDLException provides the following method for getting ...",t:"Java Error Handling"},"2843":{i:7.257702797701E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - Java Objects/DebuggingJavaWrapperObjects.htm",a:"When running an application that relies on a Java wrapper object, it is often difficult to determine when errors occur in the associated IDL object. Since the instance of the wrapper object is invoked outside of IDL, the normal debugging capabilities of the IDL Workbench are not available. However, ...",t:"Debugging Java Wrapper Objects"},"2844":{i:0.000655789596641932,u:"../Content/Connectivity Bridges/ExportFromIDL - Java Objects/StockJavaWrapperMethods.htm",a:"This section describes the stock methods in the Java wrapper objects created by the Export Bridge Assistant: abort createObject destroyObject executeString getIDLObjectClassName getIDLObjectVariableName getIDLVariable getProcessName isObjectCreated setIDLVariable setProcessName Every Java connector ...",t:"Stock Java Wrapper Methods"},"2845":{i:0.00016100832822208,u:"../Content/Connectivity Bridges/ExportFromIDL - Java Objects/AboutJavaExportObjectExamples.htm",a:"An IDL object can wrapped for use in a Java application using the Export Bridge Assistant. For valuable information on the theory and architecture of a wrapper object created by the Export Bridge Assistant, see Using the Export Bridge Assistant . This chapter provides several Java examples that ...",t:"About Java Export Object Examples"},"2846":{i:7.257702797701E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - Java Objects/DrawableJavaExportExamples.htm",a:"A Java export object that supports graphics must be based on a custom IDL object that inherits from IDLgrWindow, IDLitWindow, or IDLitDirectWindow (as described in Exporting Drawable Objects ). Additionally, your IDL object must also implement a set of listeners if you want to be able to respond to ...",t:"Drawable Java Export Examples"},"2847":{i:7.08925072333411E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - Java Objects/JavaIDLgrWindowBasedHistogramPlotGenerator.htm",a:"This drawable object example inherits from IDLgrWindow and creates a histogram plot for a selected monochrome or RGB image file. While this example does contain several custom methods including those for opening a file, creating the plots, and changing plot characteristics, it does not use keyboard ...",t:"Java IDLgrWindow Based Histogram Plot Generator"},"2848":{i:9.09787306174876E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - Java Objects/JavaIDLitWindowSurfaceManipulation.htm",a:"This drawable object example inherits from IDLitWindow and creates an ISURFACE display in a Java application. A listbox is populated with manipulator string values that, when selected, allow you to draw annotations, rotate, or zoom within the exported IDLitWindow object. You should avoid exposing ...",t:"Java IDLitWindow Surface Manipulation"},"2849":{i:9.91334070337878E-05,u:"../Content/Connectivity Bridges/ExportFromIDL - Java Objects/NondrawableJavaExportExample.htm",a:"Nondrawable objects provide access to the enormous processing power of IDL, but do not provide IDL drawing capabilities. This is useful for applications that need the data manipulation capabilities of IDL, but have no need for, or have independent drawing capabilities. Hello World Java Example with ...",t:"Nondrawable Java Export Example"},"2850":{i:8.35788664618956E-05,u:"../Content/Connectivity Bridges/Appendices - Java Object Creation/JavaObjectInitiationWithoutParameters.htm",a:"To initialize an instance of the newly created wrapper object (based on the IDL object described in Sample IDL Object ) using createObject , complete the following steps: Create a Java file named idlexfoo_example.java and save it in the Export directory created by the Assistant. Include the ...",t:"Java Object Initiation Without Parameters"},"2851":{i:8.35788664618956E-05,u:"../Content/Connectivity Bridges/Appendices - Java Object Creation/JavaObjectInitiationWithParameters.htm",a:"Use the following code to initialize the newly created Java wrapper object (based on the IDL object described in Sample IDL Object ) with its three parameters: A string A 32-bit long value An array that has two rows and three columns, containing 32-bit long values See createObject for more ...",t:"Java Object Initiation With Parameters"},"2852":{i:0.000165346547542326,u:"../Content/Connectivity Bridges/Appendices - Java Object Creation/SampleIDLObject.htm",a:"The Java createObject method creates an instance of an underlying IDL object and calls its Init method with any specified parameters (see createObject for details). Through this object instance, you have access to the properties and methods of the object as well as the underlying IDL process. The ...",t:"Sample IDL Object for Java"},"2853":{i:0.000202148446278164,u:"../Content/Connectivity Bridges/ImportToIDL - Java Objects/OverviewOfUsingJavaObjects.htm",a:"Java is an object-oriented programming language developed by Sun Microsystems that is commonly used for web development and other programming needs. It is beyond the scope of this chapter to describe Java in detail. Numerous third-party books and electronic resources are available. The Java website ...",t:"Overview Of Using Java Objects"},});