if data.Zaeler == 0 then 
	-- Ampel 1
	screens['Andon_Manuell'].ampel0_grün.fill = brushes.forestgreen
	screens['Andon_Manuell'].ampel0_gelb.fill = brushes.whitesmoke
	screens['Andon_Manuell'].ampel0_rot.fill = brushes.whitesmoke
	-- Ampel 2
	screens['Andon_Manuell'].ampel1_grün.fill = brushes.forestgreen
	screens['Andon_Manuell'].ampel1_gelb.fill = brushes.whitesmoke
	screens['Andon_Manuell'].ampel1_rot.fill = brushes.whitesmoke
	-- Ampel 3
	screens['Andon_Manuell'].ampel2_grün.fill = brushes.forestgreen
	screens['Andon_Manuell'].ampel2_gelb.fill = brushes.whitesmoke
	screens['Andon_Manuell'].ampel2_rot.fill = brushes.whitesmoke
	-- Ampel 4 
	screens['Andon_Manuell'].ampel3_grün.fill = brushes.forestgreen
	screens['Andon_Manuell'].ampel3_gelb.fill = brushes.whitesmoke
	screens['Andon_Manuell'].ampel3_rot.fill = brushes.whitesmoke
	-- Ampel 5
	screens['Andon_Manuell'].ampel4_grün.fill = brushes.forestgreen
	screens['Andon_Manuell'].ampel4_gelb.fill = brushes.whitesmoke
	screens['Andon_Manuell'].ampel4_rot.fill = brushes.whitesmoke
	-- Ampel 6
	screens['Andon_Manuell'].ampel5_grün.fill = brushes.forestgreen
	screens['Andon_Manuell'].ampel5_gelb.fill = brushes.whitesmoke
	screens['Andon_Manuell'].ampel5_rot.fill = brushes.whitesmoke
	-- Err Feld
	screens['Andon_Manuell'].Rec_Err.background = brushes.forestgreen
	screens['Andon_Manuell'].Rec_Err.borderbrush = brushes.forestgreen
	screens['Andon_Manuell'].Text_Err1.visibility = visibility.collapsed
	screens['Andon_Manuell'].Text_Err3.text = '10:01 Minutes'
	screens['Andon_Manuell'].Text_Err2.text = 'OK'
	-- Zahlen setzen
	screens['Andon_Manuell'].Text_IN.text = '93'
	screens['Andon_Manuell'].Text_AP1.text = '43'
	screens['Andon_Manuell'].Text_AP2.text = '37'
	screens['Andon_Manuell'].Text_AP3.text = '86'
	screens['Andon_Manuell'].Text_AP4.text = '235'
	screens['Andon_Manuell'].Text_AP5.text = '488'
	screens['Andon_Manuell'].Text_AP6.text = '24'
	screens['Andon_Manuell'].Text_OUT.text = '194'
	--SAP
	screens['Andon_Manuell'].Text_KPI_IST.text = '194'
	screens['Andon_Manuell'].Text_KPI_Delta.text = 1200 - 194
	--data.Zaeler = data.Zaeler + 1

elseif data.Zaeler == 1 then
	screens['Andon_Manuell'].Text_Err3.text = '10:02 Minutes'
	--data.Zaeler = data.Zaeler + 1
	
elseif data.Zaeler == 2 then
	screens['Andon_Manuell'].Text_Err3.text = '10:03 Minutes'
	screens['Andon_Manuell'].Text_IN.text = '89'
	screens['Andon_Manuell'].Text_AP1.text = '42'
	screens['Andon_Manuell'].Text_AP2.text = '35'
	screens['Andon_Manuell'].Text_AP3.text = '85'
	screens['Andon_Manuell'].Text_AP4.text = '239'
	screens['Andon_Manuell'].Text_AP5.text = '492'
	screens['Andon_Manuell'].Text_AP6.text = '20'
	screens['Andon_Manuell'].Text_OUT.text = '198'
	--SAP
	screens['Andon_Manuell'].Text_KPI_IST.text = '198'
	screens['Andon_Manuell'].Text_KPI_Delta.text = 1200 - 198
	--data.Zaeler = data.Zaeler + 1

elseif data.Zaeler == 3 then
	screens['Andon_Manuell'].Text_Err3.text = '10:04 Minutes'
	--data.Zaeler = data.Zaeler + 1
	
elseif data.Zaeler == 4 then
	screens['Andon_Manuell'].Text_Err3.text = '10:05 Minutes'
	screens['Andon_Manuell'].Text_IN.text = '82'
	screens['Andon_Manuell'].Text_AP1.text = '41'
	screens['Andon_Manuell'].Text_AP2.text = '34'
	screens['Andon_Manuell'].Text_AP3.text = '86'
	screens['Andon_Manuell'].Text_AP4.text = '243'
	screens['Andon_Manuell'].Text_AP5.text = '496'
	screens['Andon_Manuell'].Text_AP6.text = '16'
	screens['Andon_Manuell'].Text_OUT.text = '202'
	--SAP
	screens['Andon_Manuell'].Text_KPI_IST.text = '202'
	screens['Andon_Manuell'].Text_KPI_Delta.text = 1200 - 202
	
	--data.Zaeler = data.Zaeler + 1
elseif data.Zaeler == 5 then
	screens['Andon_Manuell'].Text_Err3.text = '10:06 Minutes'

-- Switch to Red
elseif data.Zaeler == 6 then 
	-- Ampel 5
	screens['Andon_Manuell'].ampel4_grün.fill = brushes.whitesmoke
	screens['Andon_Manuell'].ampel4_rot.fill = brushes.red
	-- Err Feld
	screens['Andon_Manuell'].Rec_Err.background = brushes.red
	screens['Andon_Manuell'].Rec_Err.borderbrush = brushes.red
	screens['Andon_Manuell'].Text_Err1.visibility = visibility.visible
	screens['Andon_Manuell'].Text_Err2.text = 'No Employee'
	screens['Andon_Manuell'].Text_Err3.text = '00:01 Minutes'
	-- AP
	screens['Andon_Manuell'].Text_IN.text = '70'
	screens['Andon_Manuell'].Text_AP1.text = '43'
	screens['Andon_Manuell'].Text_AP2.text = '35'
	screens['Andon_Manuell'].Text_AP3.text = '87'
	screens['Andon_Manuell'].Text_AP4.text = '247'
	screens['Andon_Manuell'].Text_AP5.text = '500'
	screens['Andon_Manuell'].Text_AP6.text = '12'
	screens['Andon_Manuell'].Text_OUT.text = '206'
	-- SAP
	screens['Andon_Manuell'].Text_KPI_IST.text = '206'
	screens['Andon_Manuell'].Text_KPI_Delta.text = 1200 - 206
		
elseif data.Zaeler == 7 then
 	screens['Andon_Manuell'].ampel3_grün.fill = brushes.whitesmoke
	screens['Andon_Manuell'].ampel3_gelb.fill = brushes.gold
	screens['Andon_Manuell'].ampel5_grün.fill = brushes.whitesmoke
	screens['Andon_Manuell'].ampel5_gelb.fill = brushes.gold
	screens['Andon_Manuell'].Text_Err3.text = '00:02 Minutes'
	screens['Andon_Manuell'].Text_AP4.text = '250'
	screens['Andon_Manuell'].Text_AP5.text = '500'
	screens['Andon_Manuell'].Text_AP6.text = '10'
	
elseif data.Zaeler == 8 then
	screens['Andon_Manuell'].Text_Err3.text = '00:03 Minutes'	
	-- AP
	screens['Andon_Manuell'].Text_IN.text = '63'
	screens['Andon_Manuell'].Text_AP1.text = '42'
	screens['Andon_Manuell'].Text_AP2.text = '34'
	screens['Andon_Manuell'].Text_AP3.text = '86'
	screens['Andon_Manuell'].Text_AP4.text = '257'
	screens['Andon_Manuell'].Text_AP5.text = '500'
	screens['Andon_Manuell'].Text_AP6.text = '8'
	screens['Andon_Manuell'].Text_OUT.text = '210'
	-- SAP
	screens['Andon_Manuell'].Text_KPI_IST.text = '210'
	screens['Andon_Manuell'].Text_KPI_Delta.text = 1200 - 210

elseif data.Zaeler == 9 then
	screens['Andon_Manuell'].Text_Err3.text = '00:04 Minutes'	
	
elseif data.Zaeler == 10 then
	screens['Andon_Manuell'].Text_Err3.text = '00:05 Minutes'
		-- AP
	screens['Andon_Manuell'].Text_IN.text = '60'
	screens['Andon_Manuell'].Text_AP1.text = '41'
	screens['Andon_Manuell'].Text_AP2.text = '37'
	screens['Andon_Manuell'].Text_AP3.text = '81'
	screens['Andon_Manuell'].Text_AP4.text = '263'
	screens['Andon_Manuell'].Text_AP5.text = '500'
	screens['Andon_Manuell'].Text_AP6.text = '4'
	screens['Andon_Manuell'].Text_OUT.text = '214'
	-- SAP
	screens['Andon_Manuell'].Text_KPI_IST.text = '214'	
	screens['Andon_Manuell'].Text_KPI_Delta.text = 1200 - 214	

end