--Skript Screen Line 12
if data.Zaeler == 0 then 
	screens['Linie_12'].Kreis0.stroke = brushes.yellowgreen
	screens['Linie_12'].Kreis1.stroke = brushes.yellowgreen
	screens['Linie_12'].Kreis2.stroke = brushes.yellowgreen
	screens['Linie_12'].Kreis3.stroke = brushes.yellowgreen
	screens['Linie_12'].Kreis4.stroke = brushes.yellowgreen
	screens['Linie_12'].Kreis5.stroke = brushes.yellowgreen
	screens['Linie_12'].Kreis6.stroke = brushes.yellowgreen
	screens['Linie_12'].Textrahmen.borderbrush = brushes.yellowgreen
	screens['Linie_12'].Zeitrahmen.borderbrush = brushes.yellowgreen
	screens['Linie_12'].Halo.visibility = visibility.collapsed
	screens['Linie_12'].D.visibility = visibility.collapsed
	screens['Linie_12'].RecError.visibility = visibility.collapsed
	-- Text Schriftart - Text
	screens['Linie_12'].Text.font = 'Calibri_90pt_grau_fett'
	screens['Linie_12'].Text.text = 'Working...'
	screens['Linie_12'].Text.left = 198
	screens['Linie_12'].Zeit.font = 'Calibri_90pt_grau'
	--screens['Linie_12'].Zeit.text = os.date('%H:%M',data.Uhrzeit.getluadate()) .. ' Uhr'
	--data.Zaeler = data.Zaeler + 1
	screens['Linie_12'].Zeit.text = '10:01'
	data.Zaeler = data.Zaeler + 1
elseif data.Zaeler == 2 then
	screens['Linie_12'].Zeit.text = '10:02'
	data.Zaeler = data.Zaeler + 1
	elseif data.Zaeler == 3 then
	screens['Linie_12'].Zeit.text = '10:03'
	data.Zaeler = data.Zaeler + 1
	elseif data.Zaeler == 4 then
	screens['Linie_12'].Zeit.text = '10:04'
	data.Zaeler = data.Zaeler + 1
elseif data.Zaeler == 5 then 
	screens['Linie_12'].Kreis0.stroke = brushes.yellowgreen
	screens['Linie_12'].Kreis1.stroke = brushes.yellowgreen
	screens['Linie_12'].Kreis2.stroke = brushes.yellowgreen
	screens['Linie_12'].Kreis3.stroke = brushes.tomato
	screens['Linie_12'].Kreis4.stroke = brushes.whitesmoke
	screens['Linie_12'].Kreis5.stroke = brushes.whitesmoke
	screens['Linie_12'].Kreis6.stroke = brushes.whitesmoke
	screens['Linie_12'].Halo.stroke = brushes.firebrick
	screens['Linie_12'].RecError.borderbrush = brushes.tomato
	screens['Linie_12'].Halo.visibility = visibility.visible
	screens['Linie_12'].D.visibility = visibility.visible
	screens['Linie_12'].RecError.visibility = visibility.visible
	screens['Linie_12'].Text.font = 'Calibri_90pt_rot_fett'
	screens['Linie_12'].Text.left = 302
	-- Text
	screens['Linie_12'].Text.text = 'Plastic Pallets refill !'
	screens['Linie_12'].Textrahmen.borderbrush = brushes.tomato
	screens['Linie_12'].Zeitrahmen.borderbrush = brushes.tomato
	screens['Linie_12'].Zeit.font = 'Calibri_90pt_rot'
	screens['Linie_12'].Zeit.text = '00:01'
	data.Zaeler = data.Zaeler + 1
elseif data.Zaeler == 6 then
	screens['Linie_12'].Zeit.text = '00:02'
	data.Zaeler = data.Zaeler + 1 
	screens['Linie_12'].Halo.stroke = brushes.maroon
elseif data.Zaeler == 7 then 
	screens['Linie_12'].Zeit.text = '00:03'
	data.Zaeler = data.Zaeler + 1
	screens['Linie_12'].Halo.stroke = brushes.firebrick 
elseif data.Zaeler == 8 then 
	screens['Linie_12'].Zeit.text = '00:04'
	data.Zaeler = data.Zaeler + 1 
	screens['Linie_12'].Halo.stroke = brushes.maroon
elseif data.Zaeler == 9 then 
	screens['Linie_12'].Zeit.text = '00:05'
	data.Zaeler = data.Zaeler + 1
	screens['Linie_12'].Halo.stroke = brushes.firebrick 
elseif data.Zaeler == 10 then 
	data.Zaeler = 0
else 
	data.Zaeler = data.Zaeler + 1
end

-- Skript Screen Gate 4
if data.flash == true then 
	screens['Putaway'].SC4text1.visibility = visibility.collapsed
	data.flash = false 
else
	screens['Putaway'].SC4text1.visibility = visibility.visible
	data.flash = true
end
