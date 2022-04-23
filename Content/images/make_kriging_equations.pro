; For GRIDDATA and KRIG2D docs:
; Create the graph of the covariance equations
; CT, VIS, Oct 2013.
; 
; Run the code. Then open up the created png file in a paint program
; and shrink it by 50%.
;

p1 = PLOT('1 - (x<1)', '2', AXIS_STYLE=1, DIM=[700, 400],$
  NAME=' Linear:          $S(1 - d \slash  R)$', $
  XRANGE=[0,1.5], YRANGE=[0,1.25], YTICKV=[0,0.5,1,1.2], YMINOR=0, $
  XTICKV=[0, 0.5, 1, 1.5], XTICKNAME=['0', '0.5 R', 'R', '1.5 R'], $
  YTICKNAME=['0', '', 'S', 'N + S'], $
  XTITLE='Distance from original point to new point', $
  FONT_SIZE=14, TITLE='Covariance equations for Kriging')

p2 = PLOT('exp(-3*x)', '2r', /OVERPLOT, $
  NAME=' Exponential:  $S e^{-3d \slash  R}$')

p3 = PLOT('exp(-3*x^2)', '2b', /OVERPLOT, $
  NAME=' Gaussian:     $S exp(-3d^2 \slash  R^2)$')

p4 = PLOT('1 - 1.5*(x<1) + 0.5*(x<1)^3', '2m', /OVERPLOT, $
  NAME=' Spherical:  $S[1 - 1.5(d \slash  R) + 0.5(d \slash  R)^3]$')

s = SYMBOL(0, 1.2, 'o', /DATA, /SYM_FILLED, CLIP=0)

l = LEGEND(SHADOW=0, LINESTYLE='none', POS=[0.84, 0.88], $
  FONT_SIZE=14, VERTICAL_SPACING=0.05)

void = POLYLINE([0, 0], [1, 1.2], /DATA, THICK=3, CLIP=0)

p1.Save, 'kriging_equations.png', RES=72*2, BORDER=10

end
