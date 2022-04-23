define({"2924":{i:0.000164710871547276,u:"../Content/External Development/IDLInternals - Keyword Processing/OverviewIDLKeywordProcessing.htm",a:"IDL keyword processing can seem confusing at first glance, due to the interrelated data structures involved. However, as the examples that follow in this chapter will show, the concepts involved are relatively straightforward once you have seen and understood a concrete example such as Keyword ...",t:"Overview of IDL Keyword Processing"},"2925":{i:0.000106135139423164,u:"../Content/External Development/IDLInternals - Keyword Processing/IDL_KW_PAR.htm",a:"The IDL_KW_PAR struct provides the basic specification for keyword processing. The IDL_KWProcessByOffset() function is passed a null-terminated array of these structures. IDL_KW_PAR structures specify which keywords a routine accepts, the attributes required of them, and the kinds of processing that ...",t:"IDL_KW_PAR"},"2926":{i:0.00019635007359185,u:"../Content/External Development/IDLInternals - Keyword Processing/IDL_KW_ARR_DESC.htm",a:"When a keyword is specified to be a read-only array (i.e., the I DL_KW_ARRAY flag is set), the value field of the IDL_KW_PAR struct should be set to point to an IDL_KW_ARR_DESC_R structure. This structure is defined as: typedef struct { char *data; IDL_MEMINT nmin; IDL_MEMINT nmax; IDL_MEMINT* ...",t:"IDL_KW_ARR_DESC_R"},"2927":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Keyword Processing/KeywordProcessingOpts.htm",a:"The following cases occur in keyword processing: Scalar Input-Only For scalar, input-only keywords, the user never sees the IDL_VARIABLE passed as the keyword argument. Instead, the value of the IDL_VARIABLE is converted to the type specified by the type field of the IDL_KW_PAR struct and is placed ...",t:"Keyword Processing Options"},"2928":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Keyword Processing/KW_RESULT.htm",a:"Each system routine that processes keywords is required to define a structure variable into which IDL_KWProcessByOffset() will store all the results of keyword processing. This variable must follow the following rules: The name of the structure type must be defined as KW_RESULT . This requirement ...",t:"KW_RESULT"},"2929":{i:0.000146275090997501,u:"../Content/External Development/IDLInternals - Keyword Processing/ProcessingKeywords.htm",a:"The IDL_KWProcessByOffset() function is used to process keywords. IDL_KWProcessByOffset() performs the following actions on behalf of the calling system routine: Verify that the keywords passed to the routine are all allowed by the routine. Carry out the type checking and conversions required for ...",t:"Processing Keywords - IDL_KWProcessByOffset()"},"2930":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Keyword Processing/CleaningUp.htm",a:"All normal exit paths from your system routine are required to call the IDL_KW_FREE macro prior to returning. This macro must be called exactly once for every call to IDL_KWProcessByOffset() . You must therefore structure your code so that IDL_KW_FREE executes before any return statement. Many ...",t:"Cleaning Up - IDL_KW_FREE Macro"},"2931":{i:0.00013139961454688,u:"../Content/External Development/IDLInternals - Keyword Processing/KWExamples.htm",a:"The following C function implements KEYWORD_DEMO, a system procedure intended to demonstrate how to write the keyword processing code for a routine. It prints the values of its keywords, changes the value of READWRITE to 42 if it is present, and returns. Each line is numbered to make discussion ...",t:"Keyword Examples"},"2932":{i:9.6398527029742E-05,u:"../Content/External Development/IDLInternals - Keyword Processing/OlderKeywordAPI.htm",a:"The Pre-IDL 5.5 Keyword API Versions of IDL prior to IDL 5.5 used a different, but similar, keyword processing API to that found in the current versions. The remainder of this chapter provides information of interest to programmers maintaining older system routines that were written to that API. ...",t:"Older Keyword API"},"2933":{i:7.36823036134192E-05,u:"../Content/External Development/IDLInternals - Variables/IDLInternalVariables.htm",a:"IDL and Internal Variables This section describes how variables are created and managed within IDL. While reading this chapter, you should refer to the following figure to see how each part fits into the overall structure of an IDL variable.  ",t:"IDL and Internal Variables"},"2934":{i:0.000268210025184458,u:"../Content/External Development/IDLInternals - Variables/IDLVARIABLEStructure.htm",a:"IDL variables are represented by IDL_VARIABLE structures. The definition of IDL_VARIABLE is as follows: typedef struct { UCHAR type; UCHAR flags; IDL_ALLTYPES value; }\tIDL_VARIABLE; An IDL_VPTR is a pointer to an IDL_VARIABLE structure: typedef IDL_VARIABLE *IDL_VPTR; The IDL_ALLTYPES union is ...",t:"The IDL_VARIABLE Structure"},"2935":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Variables/ScalarVariables.htm",a:"A scalar IDL_VARIABLE is distinguished by not having the IDL_V_ARR bit set in its flags field. A scalar variable must have one of the basic data types (IDL structures are never scalar) shown in the table below. The data for a scalar variable is stored in the IDL_VARIABLE itself, using the ...",t:"Scalar Variables"},"2936":{i:8.88444133805491E-05,u:"../Content/External Development/IDLInternals - Variables/ArrayVariables.htm",a:"Array variables have the IDL_V_ARR bit of their flags field set, and the value.arr field points to an array descriptor defined by the IDL_ARRAY structure: typedef IDL_MEMINT IDL_ARRAY_DIM[IDL_MAX_ARRAY_DIM];  typedef struct { IDL_MEMINT elt_len; IDL_MEMINT arr_len; IDL_MEMINT n_elts; UCHAR *data; ...",t:"Array Variables"},"2937":{i:0.00011793621636442,u:"../Content/External Development/IDLInternals - Variables/StructureVariables.htm",a:"Structure variables have the type code IDL_TYP_STRUCT . They also have the IDL_V_STRUCT bit set in their flags field. The value.s field of such a variable contains a structure descriptor defined by the IDL_SREF structure: typedef struct { IDL_ARRAY *arr;\t/* ^ to IDL_ARRAY containing data */ void ...",t:"Structure Variables"},"2938":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Variables/HeapVariables.htm",a:"Direct access to pointer and object reference heap variables (types IDL_TYP_PTR and IDL_TYP_OBJREF , respectively) is not allowed. Rather than accessing the heap variable directly, store the value of the heap variable (an IDL pointer or object reference) in a regular IDL variable at the IDL user ...",t:"Heap Variables"},"2939":{i:0.000169418511189048,u:"../Content/External Development/IDLInternals - Variables/TemporaryVariables.htm",a:"As discussed previously, IDL maintains a pool of nameless variables known as temporary variables. These variables are used by the interpreter to hold temporary results from evaluating expressions, and are also used within system procedures and functions that need temporary workspace. In addition, ...",t:"Temporary Variables"},"2940":{i:9.49825876185252E-05,u:"../Content/External Development/IDLInternals - Variables/CreateArrayFromExistingData.htm",a:"There are two functions that allow you to create an IDL array variable whose data points at data you supply rather than having IDL allocate the data space. The routine IDL_ImportArray() returns a temporary variable, while IDL_ImportNamedArray() returns a named variable in the current execution ...",t:"Creating an Array from Existing Data"},"2941":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Variables/GettingDynamicMemory.htm",a:"Many programs need to get dynamic memory for some temporary calculation. In the C language, the functions malloc() and free() are used for this purpose, while other languages have their own facilities. IDL provides its own memory allocation routines (see Dynamic Memory ). Use of such facilities ...",t:"Getting Dynamic Memory"},"2942":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Variables/AccessingVariableData.htm",a:"Often, we are not concerned with the distinction between a scalar and array variable—all that is desired is a pointer to the data and to know how many elements there are. IDL_VarGetData() can be used to obtain this information: void IDL_VarGetData(IDL_VPTR v, IDL_MEMINT *n, char **pd, int ...",t:"Accessing Variable Data"},"2943":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Variables/CopyingVariables.htm",a:"To copy the contents of one variable to another, use the IDL_VarCopy() function: void IDL_VarCopy(IDL_VPTR src, IDL_VPTR dst) Arguments src and dst are the source and destination, respectively. IDL_VarCopy() uses the following rules when copying variables: If the destination variable already has a ...",t:"Copying Variables"},"2944":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Variables/StoringScalarValues.htm",a:"The IDL_StoreScalar() function sets an IDL_VARIABLE to a scalar value: void IDL_StoreScalar(IDL_VPTR dest, int type, IDL_ALLTYPES *value) where: dest An IDL_VPTR to the IDL_VARIABLE in which the scalar should be stored. type The type code for the scalar value. See Type Codes . value The address of ...",t:"Storing Scalar Values"},"2945":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Variables/ObtainNameVariable.htm",a:"Obtaining the Name of a Variable The IDL_VarName() function returns the name of a variable, constant, or expression given its address. If the item is a named variable, it must be in the currently active program unit: char *IDL_VarName(IDL_VPTR v)  ",t:"Obtaining the Name of a Variable"},"2946":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Variables/LookUpMainProgramVariables.htm",a:"The IDL_GetVarAddr() function returns the address of a main program variable, given its name: IDL_VPTR IDL_GetVarAddr(char *name) The return value is NULL if the variable does not exist, otherwise the pointer to the variable is returned. Alternatively, IDL_GetVarAddr1() will enter a new variable ...",t:"Looking Up Main Program Variables"},"2947":{i:6.15672984405394E-05,u:"../Content/External Development/IDLInternals - Variables/LookUpVariablesCurrentScope.htm",a:"The IDL_FindNamedVariable() function returns the address of a variable in the current execution scope given its name: IDL_VPTR IDL_FindNamedVariable(char *name, int ienter) name Name of the variable to find. ienter Set this parameter to TRUE to create the variable if it does not already exist. If ...",t:"Looking Up Variables in Current Scope"},"2948":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Variables/FreeDynamicResources.htm",a:"In addition to performing its primary function, IDL_StoreScalar() and IDL_StoreScalarZero() have two very useful side effects: Storing a scalar value in a variable causes IDL to free any dynamic memory currently used by that variable. These routines do the required error checking to make sure the ...",t:"Freeing Dynamic Resources"},"2949":{i:0.0014650661214704,u:"../Content/External Development/IDLInternals - String Processing/StringProcessing.htm",a:"A number of functions exist to simplify the processing of IDL_STRING descriptors. By using these functions instead of doing your own string management, you can eliminate a common source of errors. Topics included in this section include: Accessing IDL_STRING Values Copying Strings - IDL_StrDup() ...",t:"String Processing"},"2950":{i:0.000133893337948217,u:"../Content/External Development/IDLInternals - Error Handling/ErrorHandling.htm",a:"IDL Internals - Error Handling ",t:"IDL Internals - Error Handling"},"2951":{i:0.000160452812856548,u:"../Content/External Development/IDLInternals - Error Handling/MessageBlocks.htm",a:"IDL maintains messages in opaque data structures known as Message Blocks. A message block contains all the messages for a logically related area. When IDL starts, there is only one defined block named IDL_MBLK_CORE , containing all messages defined by the core IDL product. Typically, dynamically ...",t:"Message Blocks"},"2952":{i:0.000181543389787286,u:"../Content/External Development/IDLInternals - Error Handling/IssuingErrorMessages.htm",a:"Errors are reported using one of the following functions: • IDL_Message() • IDL_MessageFromBlock() • IDL_MessageSyscode() • IDL_MessageSyscodeFromBlock() These functions are patterned after the standard C library printf() function. They are really the same function, differing in which message block ...",t:"Issuing Error Messages"},"2953":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Error Handling/ChoosingErrorCode.htm",a:"The choice of which code to use depends on the context in which the message is issued, but IDL_M_NAMED_GENERIC is usually preferred. For any significant development involving an IDL system routine, we recommend your code be packaged as a Dynamically Loadable Module (DLM) , and that your DLM define a ...",t:"Choosing an Error Code"},"2954":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Error Handling/LookUpMessageCodeByName.htm",a:"Given a message block pointer and the name of a message from that block, the IDL_MessageNameToCode() function returns the message code that corresponds to it. This is especially useful for dynamically loadable modules that need to throw errors from the IDL core block. The actual error codes are ...",t:"Looking Up a Message Code by Name"},"2955":{i:0.000105552057969542,u:"../Content/External Development/IDLInternals - Error Handling/CheckingArguments.htm",a:"IDL allows a user to provide any number of arguments, of any type, to system functions and procedures. IDL checks for a valid number of arguments but the routine itself must check the validity of types. This task consists of examining the argv argument to the routine checking the type and flags ...",t:"Checking Arguments"},"2956":{i:5.79773759099561E-05,u:"../Content/External Development/IDLInternals - Type Conversion/InternalsTypeConv.htm",a:"IDL Internals - Type Conversion ",t:"IDL Internals - Type Conversion"},"2957":{i:0.00011793621636442,u:"../Content/External Development/IDLInternals - Type Conversion/ConvertingArgumentsToCScalars.htm",a:"The routines described in this section convert the value of their IDL_VARIABLE argument to the C scalar type indicated by their name. IDL_MEMINTScalar() and IDL_FILEINTScalar() exist for processing memory and file sizes without the need to know their actual types, as discussed in “IDL_MEMINT and ...",t:"Converting Arguments to C Scalars"},"2958":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Type Conversion/GeneralTypeConversion.htm",a:"The IDL_BasicTypeConversion() function provides general purpose type conversion: IDL_VPTR IDL_BasicTypeConversion(int argc, IDL_VPTR argv[] int type) where: argc The number of IDL_VPTR s contained in argv. If argc is 1, this function returns a pointer to a temporary VARIABLE containing the value of ...",t:"General Type Conversion"},"2959":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Type Conversion/ConvertingSpecificTypes.htm",a:"A series of functions exist to convert VARIABLEs to specific types: IDL_VPTR IDL_CvtByte(int argc, IDL_VPTR argv[]) IDL_VPTR IDL_CvtBytscl(int argc, IDL_VPTR argv[], char *argk) IDL_VPTR IDL_CvtFix(int argc, IDL_VPTR argv[]) IDL_VPTR IDL_CvtUInt(int argc, IDL_VPTR argv[]) IDL_VPTR IDL_CvtLng(int ...",t:"Converting To Specific Types"},"2960":{i:5.79773759099561E-05,u:"../Content/External Development/IDLInternals - UNIX Signals/InternalsUNIX.htm",a:"IDL Internals - UNIX Signals ",t:"IDL Internals - UNIX Signals"},"2961":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - UNIX Signals/IDLandSignals.htm",a:"Signals pose one of the more difficult challenges faced by the UNIX programmer. Although seemingly simple, they are a tough portability problem because there are several variants, and their semantics are subtle, inconvenient, and easily confused. These issues are only magnified when signals are used ...",t:"IDL and Signals"},"2962":{i:6.32815880542948E-05,u:"../Content/External Development/IDLInternals - UNIX Signals/SignalHandlers.htm",a:"IDL signal handler functions are defined as: typedef void (* IDL_SignalHandler_t)(int signo); When a signal is delivered to the process, all registered signal handlers are called. signo is the integer number of the signal delivered, as defined by the C language header file signal.h (found in ...",t:"Signal Handlers"},"2963":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - UNIX Signals/EstablishingSignalHandler.htm",a:"To register a signal handler, use the IDL_SignalRegister() function: int IDL_SignalRegister(int signo, IDL_SignalHandler_t func, int msg_action) where: signo The numeric value of the signal to register for, as defined in signal.h . func The signal handler to be called when the signal specified by ...",t:"Establishing a Signal Handler"},"2964":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - UNIX Signals/RemovingSignalHandler.htm",a:"To remove a signal handler, use the IDL_SignalUnregister() function: export int IDL_SignalUnregister(int signo, IDL_SignalHandler_t func, int msg_action) where: signo The signal to unregister. func The handler to be unregistered. msg_action One of the IDL_MSG_* action codes for IDL_Message() . If ...",t:"Removing a Signal Handler"},"2965":{i:6.15672984405394E-05,u:"../Content/External Development/IDLInternals - UNIX Signals/UNIXSignalMasks.htm",a:"UNIX processes contain a signal mask that defines which signals can be delivered and which are blocked from delivery at any given time. When a signal arrives, the UNIX kernel checks the signal mask: If the signal is in the process mask, it is delivered, otherwise it is noted as undeliverable and ...",t:"UNIX Signal Masks"},"2966":{i:6.9419762292271E-05,u:"../Content/External Development/IDLInternals - Timers/IDLandTimers.htm",a:"The details of how timers work varies widely between operating systems and between variants of the same operating system (different “flavors” of UNIX, for example). IDL’s timer module is intended to provide a stable interface to the rest of IDL, and to isolate the non-portable code in one place. ...",t:"IDL and Timers"},"2967":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Timers/MakingTimerRequests.htm",a:"The IDL_TimerSet() function registers a timer request. IDL timer requests are one- shot timers. If you wish to have a timer go off repeatedly, your callback function must make a new request each time it is called to set up the next timer. void IDL_TimerSet(length, callback, from_callback, context) ...",t:"Making Timer Requests"},"2968":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Timers/CancelAsyncTimerRequests.htm",a:"Canceling Asynchronous Timer Requests Under UNIX, IDL_TimerCancel() can be used to cancel a timer request that has not yet been delivered: void IDL_TimerCancel(context) where: context A timer request context returned by a previous call to IDL_TimerSet() . ",t:"Canceling Asynchronous Timer Requests"},"2969":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Timers/BlockingUnixTimers.htm",a:"Under UNIX operating systems, the delivery of signals such as SIGALRM (used to manage timers) can cause system calls to be interrupted. In such cases, the system call returns a status of -1 and the global errno variable is set to the value EINTR . It is the caller’s responsibility to check for this ...",t:"Blocking UNIX Timers"},"2970":{i:5.79773759099561E-05,u:"../Content/External Development/IDLInternals - Files and Input Output/FilesIO.htm",a:"IDL Internals - Files and I/O ",t:"IDL Internals - Files and I/O"},"2971":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Files and Input Output/IDLandIO.htm",a:"IDL provides extensive Input/Output facilities at the user level. Internally, it uses native Input/Output facilities (UNIX system calls or Windows system API) in addition to the standard C library stream package (stdio). The choice of which facilities to use are made based on the target platform and ...",t:"IDL and Input/Output"},"2972":{i:0.000130106058315263,u:"../Content/External Development/IDLInternals - Files and Input Output/FileInformation.htm",a:"IDL maintains a file table in which it keeps a file descriptor for each file opened with IDL_FileOpen() . This table is indexed by the file Logical Unit Number, or LUN. These are the same LUNs IDL users use. The IDL_FileStat() function is used to get information about a file. IDL_FileStat() void ...",t:"File Information"},"2973":{i:6.48520808246411E-05,u:"../Content/External Development/IDLInternals - Files and Input Output/OpenFiles.htm",a:"IDL_FileOpen() int IDL_FileOpen(int argc, IDL_VPTR *argv, char *argk, int access_mode, IDL_SFILE_FLAGS_T extra_flags, int longjmp_safe, int msg_attr) IDL_FileOpen() returns TRUE if the file has been successfully opened and FALSE otherwise. If longjmp_safe is TRUE, the usual course is to jump back to ...",t:"Opening Files with IDL_FileOpen()"},"2974":{i:6.48520808246411E-05,u:"../Content/External Development/IDLInternals - Files and Input Output/CloseFiles.htm",a:"Files are closed using the IDL_FileClose() function. IDL_FileClose() void IDL_FileClose(int argc, IDL_VPTR *argv, char *argk) argc The number of arguments in argv. argv The arguments to the close function. These should be scalar integer values giving the Logical Unit Numbers of the file units to ...",t:"Closing Files with IDL_FileClose()"},"2975":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Files and Input Output/PreventFileClosing.htm",a:"Use the IDL_FileSetClose() function to prevent files from closing. It does this by setting or clearing the IDL_F_NOCLOSE bit in the flags field of the internal file descriptor maintained by IDL for the file (see File Information ). This feature is used primarily in graphics drivers for printers. For ...",t:"Prevent File Closing - IDL_FileSetClose()"},"2976":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Files and Input Output/CheckFileStatus.htm",a:"System routines that deal with files must verify that the files have the proper attributes for the intended operation. Use the function IDL_FileEnsureStatus() for this. IDL_FileEnsureStatus() int IDL_FileEnsureStatus(int action, int unit, int flags) action If the file unit does not satisfy the ...",t:"Check File Status - IDL_FileEnsureStatus()"},"2977":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Files and Input Output/AllocateFreeFileUnits.htm",a:"System routines must allocate and deallocate file units in order to avoid conflicts. When writing IDL procedures, the GET_LUN and FREE_LUN procedures are used. When writing system-level routines, you can access the same routines by calling IDL_FileGetUnit() and IDL_FileFreeUnit() . IDL_FileGetUnit() ...",t:"Allocating and Freeing File Units"},"2978":{i:6.48520808246411E-05,u:"../Content/External Development/IDLInternals - Files and Input Output/DetectEOF.htm",a:"Detecting End of File with IDL_FileEOF() IDL_FileEOF() int IDL_FileEOF(int unit) The IDL_FileEOF() function returns TRUE if the file specified by the Logical Unit Number unit is at EOF, and FALSE otherwise. unit The Logical Unit Number (LUN) of the file in question. ",t:"Detecting End of File with IDL_FileEOF()"},"2979":{i:0.00012014719249384,u:"../Content/External Development/IDLInternals - Files and Input Output/FlushBuffData.htm",a:"IDL_FileFlushUnit() int IDL_FileFlushUnit(int unit) File data might be buffered in system memory in order to boost input/output performance. The IDL_FileFlushUnit() function forces any buffered data for the file specified by the Logical Unit Number unit to be written out. unit The Logical Unit ...",t:"Flushing Buffered Data"},"2980":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Files and Input Output/ReadSingleChar.htm",a:"IDL_GetKbrd() The IDL_GetKbrd() function returns the character code of the next available character from IDL_STDIN_UNIT : int IDL_GetKbrd(int should_wait) should_wait Set this argument to TRUE if IDL_GetKbrd() should wait for a key to be struck, FALSE otherwise. If should_wait is FALSE and no input ...",t:"Reading a Single Character - IDL_GetKbrd()"},"2981":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Files and Input Output/OutputIDLVars.htm",a:"IDL_Print() and IDL_PrintF() The IDL_Print() and IDL_PrintF() functions output the value of IDL_VARIABLE s. IDL_Print() simply outputs to IDL_STDOUT_UNIT , while IDL_PrintF() outputs to a specified unit. These functions are the implementation of the built-in IDL system procedures PRINT and PRINTF . ...",t:"Output of IDL Variables"},"2982":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Files and Input Output/AddJrnlFile.htm",a:"The IDL_Logit() function can be used to add lines of output to the journal log file: void IDL_Logit(char *s) s A pointer to a NULL terminated string to be added to the journal log file. If a journal log file is currently open, this function writes the specified string to it on a new line. If no ...",t:"Adding to the Journal File - IDL_Logit()"},"2983":{i:5.79773759099561E-05,u:"../Content/External Development/IDLInternals - Miscellaneous/InternalsMisc.htm",a:"IDL Internals - Miscellaneous Topics ",t:"IDL Internals - Miscellaneous Topics"},"2984":{i:0.000165050999474809,u:"../Content/External Development/IDLInternals - Miscellaneous/DynamicMemory.htm",a:"IDL provides access to the dynamic memory allocation routines it uses internally. Use these routines rather than system-provided routines such as malloc()/free() when possible. The memory pointers returned by the IDL memory allocation routines discussed in this chapter do not necessarily correspond ...",t:"Dynamic Memory"},"2985":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Miscellaneous/ExitHandlers.htm",a:"IDL maintains a list of exit handler functions that it calls as part of its shutdown operations. These handlers perform actions such as closing files, wrapping up graphics output, and restoring the user environment to its initial state. Exit handlers accept no arguments and return no value. A ...",t:"Exit Handlers - IDL_ExitRegister()"},"2986":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Miscellaneous/UserInterrupts.htm",a:"IDL catches certain operating system signals including SIGINT , which occurs when the user types the interrupt character (usually Control-C). When the interpreter detects the interrupt character, it sets an internal flag which causes execution of the program to stop at the next sequence statement. ...",t:"User Interrupts - IDL_BailOut()"},"2987":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Miscellaneous/FnsForRetSysVar.htm",a:"The following functions return the values of certain system variables. Note that these values should be considered READ-ONLY. IDL_STRING *IDL_SysvVersionArch(void) This function returns a pointer to the !VERSION.ARCH system variable. IDL_STRING *IDL_SysvVersionOS(void) This function returns a ...",t:"Functions for Returning System Variables"},"2988":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Miscellaneous/TerminalInformation.htm",a:"The global variable IDL_FileTerm is a structure of type IDL_TERMINFO : typedef struct { char *name;\t/* Name Of Terminal Type */ char is_tty;\t/* True if stdin is a terminal */ int lines;\t/* Lines on screen */ int columns;\t/* Width of output */ } IDL_TERMINFO; Under operating systems that do not ...",t:"Terminal Information"},"2989":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Miscellaneous/EnsureUnixTTY.htm",a:"Under some UNIX operating systems, IDL keeps the user\u0027s terminal in a raw mode, required to implement command line editing. On these platforms, externally linked code that performs output to the terminal will find that the output does not appear as expected. A usual symptom of this is that newline ...",t:"Ensuring UNIX TTY State"},"2990":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Miscellaneous/TypeInfo.htm",a:"The following read-only global variables provide information about IDL data. Under Windows, these global variables are not available; use the functions listed below to retrieve the values contained in the global variables. IDL_OutputFormat An array of pointers to character strings. IDL_OutputFormat ...",t:"Type Information"},"2991":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Miscellaneous/UserInfo.htm",a:"Use the IDL_GetUserInfo() function to get information about the current session. This is the sort of information that can be used in the header of files produced by graphics drivers. It is used, for example, by the PostScript driver: void IDL_GetUserInfo(IDL_USER_INFO *user_info) where the ...",t:"User Information - IDL_GetUserInfo()"},"2992":{i:5.54291242025632E-05,u:"../Content/External Development/IDLInternals - Miscellaneous/Constants.htm",a:"Preprocessor constants defined in the idl_export.h file should be used in preference to hardwired values. To accommodate the needs of various operating systems, some of these constants have different values in different versions of IDL. Those constants that are not discussed elsewhere  are listed ...",t:"Constants"},});