; CT, ITTVIS, June 2011.
; 
; Used to create the sample font images within the
; "Using_TrueType_Fonts.htm" and "Using_Hershey_Fonts.htm" topics.
;
; Note: This pro code does not need to ship with the help or IDL.
; It is purely for internal use of the docs group.
; 
; Written when we added the new DejaVu fonts to IDL 8.2.
; 
; After running this code, open each file in a Postscript viewer
; and save it out to a GIF. Then copy it into the image
; directory within the docs source tree.
;
pro make_truetype_font_tables

set_plot,'ps'
DEVICE,file='c:/font_courier.eps'
showfont, 'Courier', 'Courier', ENCAPSULATED=1, /TT_FONT
DEVICE,/close

set_plot,'ps'
DEVICE,file='c:/font_times.eps'
showfont, 'Times', 'Times', ENCAPSULATED=1, /TT_FONT
DEVICE,/close

set_plot,'ps'
DEVICE,file='c:/font_helvetica.eps'
showfont, 'Helvetica', 'Helvetica', ENCAPSULATED=1, /TT_FONT
DEVICE,/close

set_plot,'ps'
DEVICE,file='c:/font_symbol.eps'
showfont, 'Symbol', 'Symbol', ENCAPSULATED=1, /TT_FONT
DEVICE,/close

set_plot,'ps'
DEVICE,file='c:/font_monosymbol.eps'
showfont, 'Monospace Symbol', 'Monospace Symbol', ENCAPSULATED=1, /TT_FONT
DEVICE,/close

;cpages = ['22'x,'28'x];,'a6'x,'a7'x,'fb'x,'fe'x]
;foreach cp, cpages do begin
;  codepage = cp*256
;  set_plot,'ps'
;  DEVICE,file='c:/unicode'+string(codepage,format='(Z4.4)') + '.eps'
;  showfont, 'Helvetica', 'Helvetica', ENCAPSULATED=1, /TT_FONT, OFFSET=codepage
;  DEVICE,/close
;endforeach

names = 'Simplex'
names = ['Simplex Roman', 'Simplex Greek', 'Duplex Roman', $
        'Complex Roman', 'Complex Greek', $
        'Complex Italic', 'Math and Special', $
        'Gothic English', 'Simplex Script', 'Complex Script', $
        'Gothic Italian', 'Gothic German', 'Cyrillic', $
        'Triplex Roman', 'Triplex Italic', 'Miscellaneous']
j = 0
for i=3,20 do begin
  if i eq 10 || i eq 19 then continue
  set_plot,'ps'
  f = 'c:/font' + string(i,format='(i2.2)') + '.eps'
  DEVICE,file=f
  showfont, i, names[j], ENCAPSULATED=(i ne 9 && i ne 20), CHARTHICK=2
  DEVICE,/close
  j++
endfor

end
