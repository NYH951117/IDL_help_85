; CT, ITTVIS, June 2011.
; 
; Creates the sample images for the Graphics TEXT function.
; Note: This pro code does not need to ship with the help or IDL.
; It is purely for internal use of the docs group.
; 
; Written when we added the new DejaVu fonts to IDL 8.2.
; 
; Compile the code, then do:
;   make_text_function_mathsymbols, 0  ; greekLetters.png
;   make_text_function_mathsymbols, 1  ; mathSymbols.png
;   make_text_function_mathsymbols, 2  ; textAccents.png
;   make_text_function_mathsymbols, 3  ; miscSymbols.png
;   make_text_function_mathsymbols, 4  ; superSubExample.png
;   make_text_function_mathsymbols, 5  ; textExample.pdf
;
; The sample images will all be saved in C:/*.png.
; Copy them into the image directory within the docs source tree.
;
pro make_text_function_mathsymbols, a

  if (a ge 4) then goto, otherStuff
  
  case a of
  0: begin
    symbols = $
      'alpha,beta,chi,delta,epsilon,eta,gamma,iota,kappa,lambda,'+$
      'mu,nu,omega,omicron,phi,pi,psi,rho,sigma,tau,'+$
      'theta,upsilon,xi,zeta,Alpha,Beta,Chi,Delta,Epsilon,Eta,'+$
      'Gamma,Iota,Kappa,Lambda,Mu,Nu,Omega,Omicron,Phi,Pi,'+$
      'Psi,Rho,Sigma,Tau,Theta,Upsilon,Xi,Zeta,varepsilon,varphi,'+$
      'varpi,varsigma,vartheta'
    symbols = STRSPLIT(symbols, ',', /EXTRACT)
    file = 'greekLetters.png'
    end
  1: begin
    symbols = $
      'aleph,angle,approxeq,approx,bot,bullet,cap,cdot,'+$
      'circledR,circ,clubsuit,copyright,cup,dagger,ddagger,deg,diamondsuit,diamond,div,'+$
      'downarrow,Downarrow,emptyset,equiv,exists,forall,geq,heartsuit,Im,'+$
      'infty,int,in,langle,lceil,ldots,leftarrow,Leftarrow,leftrightarrow,'+$
      'Leftrightarrow,leq,lfloor,mid,nabla,neq,ni,notin,nsubset,'+$
      'oplus,otimes,overline,partial,permil,perp,pm,'',prime,",primeprime,prod,'+$
      'propto,rangle,rceil,Re,rfloor,rightarrow,Rightarrow,sim,slash,spadesuit,'+$
      'sqrt,subseteq,subset,sum,supseteq,supset,therefore,times,'+$
      'uparrow,Uparrow,vee,wedge,wp'
    symbols = STRSPLIT(symbols, ',', /EXTRACT)
    file = 'mathSymbols.png'
    end
  2: begin
    symbols = $
      'aa,AA,ae,AE,dh,DH,o,O,ss,th,TH'
    symbols = STRSPLIT(symbols, ',', /EXTRACT)
    file = 'textAccents.png'
    end
  3: begin
    symbols = ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', $
      'Saturn', 'Uranus', 'Neptune', 'Pluto', 'Moon', 'rightmoon', 'leftmoon', $
      'box', 'boxcheck', 'boxx', $
      'cdots', 'ddots', 'ell', 'flat', 'hbar', 'mho', 'natural', $
      'notparallel', 'odot', 'oint', 'ominus', 'oslash', $
      'parallel', '|', 'sharp', 'star', 'vdots', $
      'Arrrr', 'Frosty']
    file = 'miscSymbols.png'
    end
  endcase

  nrows = CEIL(N_ELEMENTS(symbols)/4.)

  w = WINDOW(dimensions=[800,700])
  foreach sym, symbols, i do begin
    x = 0.07 + (i/nrows)/4.
    y = 0.94 - (i mod nrows)/25.
    t = Text(x-0.05,y,'$\'+sym+'$', font_size=18)
    t = Text(x,y,'\'+sym, font_size=11, font_name='Courier')
  endforeach
  w.Save, file, BORDER=10, WIDTH=800
;  w.Save, 'c:/' + file + '.pdf'


return

otherStuff:

if (a eq 4) then begin

  w = window(dimensions=[400,400])
  txt = ['\$a_n^2\$ = $a_n^2$', $
    '\$g^{\mu\nu}\$ = $g^{\mu\nu}$', $
    '\$e^{e^X}\$ = $e^{e^{X}}$', $
    '\$a_{b_M} e^{x^2}\$ = $a_{b_M} e^{x^2}$']
  t=text([0.1,0.1,0.1,0.1],[0.5,0.4,0.3,0.2], txt, font_name='DejaVuSans')
  w.save,'superSubExample.png',border=10,width=400

endif

if (a eq 5) then begin

  x = 0.01*(FINDGEN(201))
  p1 = PLOT(x, EXPINT(1, x), '2', YRANGE=[0,2])
  p2 = PLOT(x, EXPINT(2, x), 'r2', /OVERPLOT)
  p3 = PLOT(x, EXPINT(3, x), 'g2', /OVERPLOT)
  t1 = TEXT(0.3, 1.6, $
    '$\it E_n(z) = \int_{1}^{\infty} ' + $
    'e^{-zt} t^{-n} dt, \Re(z)\geq 0$', $
  /DATA, FONT_SIZE=14, FONT_NAME='Helvetica')
  t2 = TEXT([0.4, 0.22, 0.1], [0.8, 0.55, 0.2], $
     '$\it n = '+['1','2','3']+'$', /DATA)
  p1.save,'textExample.png',border=10,resolution=96
  p1.save,'textExample.pdf'
endif

end

