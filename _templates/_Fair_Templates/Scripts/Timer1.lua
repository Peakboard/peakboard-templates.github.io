screens['Finishing']['QRCode'].value = data.ProdOrder[0].ProdOrderNo

for index = 0, 4 do
	if data.Screen1[index].Ist == 0 then 
		data.Screen1[index].Ist = math.roundwithoutdecimals( data.Screen1[index].Soll / 4)
	end
end

for index1 = 0, 2 do
	if data.Screen1[index1].Durchlauf == 1002 then 
		data.Screen1[index1].istsoll = false
		data.Screen1[index1].Ist = 1
		data.Screen1[index1].Durchlauf = 0
		-- Produktionshalle (grün)		
		screens['Produktionshalle']['Sc1Header' .. index1].background = brushes.mediumseagreen
		screens['Produktionshalle']['Sc1Header' .. index1 .. 'b'].background = brushes.mediumseagreen
		screens['Produktionshalle']['SC1Gauge' .. index1].scalebrush = brushes.seagreen
		
		-- Screen Finishing Line - Lines of Departmend (grün)
		screens['Finishing']['Line' .. index1].background = brushes.mediumseagreen
		screens['Finishing']['Line' .. index1].zindex = 1
		screens['Finishing']['SC1Gauge' .. index1].trailbrush = brushes.mediumseagreen
		
		data.Screen1[index1].Prozente = string.tostring( math.roundwithoutdecimals((data.Screen1[index1].Ist / data.Screen1[index1].Soll) * 100)) .. ' %'
		data.Screen1[index1].Percent = data.Screen1[index1].Ist / data.Screen1[index1].Soll
	elseif data.Screen1[index1].Ist >= data.Screen1[index1].Soll - 3 and data.Screen1[index1].istsoll == false then 
		data.Screen1[index1].istsoll = true
		data.Screen1[index1].Ist = data.Screen1[index1].Soll
		data.Screen1[index1].Durchlauf = 1000
		data.Screen1[index1].Prozente = string.tostring( math.roundwithoutdecimals((data.Screen1[index1].Ist / data.Screen1[index1].Soll) * 100)) .. ' %'
		data.Screen1[index1].Percent = data.Screen1[index1].Ist / data.Screen1[index1].Soll
		-- Produktionshalle (grau)	
		screens['Produktionshalle']['Sc1Header' .. index1].background = brushes.darkgray
		screens['Produktionshalle']['Sc1Header' .. index1 .. 'b'].background = brushes.darkgray
		
		-- Screen Finishing Line - Lines of Departmend (grau)		
		screens['Finishing']['Line' .. index1].background = brushes.lightgray
		screens['Finishing']['Line' .. index1].zindex = 4
	else
		if data.Screen1[index1].Durchlauf < 1000 then 
			data.Screen1[index1].Ist = data.Screen1[index1].Ist + math.random(1,3)
			data.Screen1[index1].Prozente = string.tostring( math.roundwithoutdecimals((data.Screen1[index1].Ist / data.Screen1[index1].Soll) * 100)) .. ' %'
			data.Screen1[index1].Percent = data.Screen1[index1].Ist / data.Screen1[index1].Soll
		end
		data.Screen1[index1].Durchlauf = data.Screen1[index1].Durchlauf + 1
	end
end
for index2 = 3, 4 do
	if data.Screen1[index2].Durchlauf == 20 then 
		data.Screen1[index2].Durchlauf = 0 
	elseif data.Screen1[index2].Durchlauf >= 10 and data.Screen1[index2].Durchlauf <= 15 then 
		-- Produktionshalle (orange)
		screens['Produktionshalle']['Sc1Header' .. index2].background = brushes.darkorange
		screens['Produktionshalle']['Sc1Header' .. index2 .. 'b'].background = brushes.darkorange
		screens['Produktionshalle']['SC1Gauge' .. index2].scalebrush = brushes.orangered
		-- Screen Finishing Line - Lines of Departmend (orange)	
		screens['Finishing']['Line' .. index2].background = brushes.orangered
		screens['Finishing']['Line' .. index2].zindex = 10
		screens['Finishing']['SC1Gauge' .. index2].trailbrush = brushes.orangered
		data.Screen1[index2].Durchlauf = data.Screen1[index2].Durchlauf + 1
	else 
		if data.Screen1[index2].Ist >= data.Screen1[index2].Soll + 12 then 
			data.Screen1[index2].Ist = 1
		-- Produktionshalle (grün)
			screens['Produktionshalle']['Sc1Header' .. index2].background = brushes.mediumseagreen
			screens['Produktionshalle']['Sc1Header' .. index2 .. 'b'].background = brushes.mediumseagreen
			screens['Produktionshalle']['SC1Gauge' .. index2].scalebrush = brushes.seagreen	
		-- Screen Finishing Line - Lines of Departmend (grün)			
			screens['Finishing']['Line' .. index2].background = brushes.mediumseagreen
			screens['Finishing']['Line' .. index2].zindex = 1
			screens['Finishing']['SC1Gauge' .. index2].trailbrush = brushes.mediumseagreen
			data.Screen1[index2].Prozente = string.tostring( math.roundwithoutdecimals((data.Screen1[index2].Ist / data.Screen1[index2].Soll) * 100)) .. ' %'
			data.Screen1[index2].Percent = data.Screen1[index2].Ist / data.Screen1[index2].Soll
		elseif data.Screen1[index2].Ist >= data.Screen1[index2].Soll then 
			data.Screen1[index2].Ist = data.Screen1[index2].Ist + math.random(1,3)
		-- Produktionshalle (grau)
			screens['Produktionshalle']['Sc1Header' .. index2].background = brushes.darkgray
			screens['Produktionshalle']['Sc1Header' .. index2 .. 'b'].background = brushes.darkgray
		-- Screen Finishing Line - Lines of Departmend (grau)	
			screens['Finishing']['Line' .. index2].background = brushes.lightgray
			screens['Finishing']['Line' .. index2].zindex = 4
			data.Screen1[index2].Prozente = '100 %'
			data.Screen1[index2].Percent = 1
		else 
			data.Screen1[index2].Ist = data.Screen1[index2].Ist + math.random(1,3)
			data.Screen1[index2].Prozente = string.tostring( math.roundwithoutdecimals((data.Screen1[index2].Ist / data.Screen1[index2].Soll) * 100)) .. ' %'
			data.Screen1[index2].Percent = data.Screen1[index2].Ist / data.Screen1[index2].Soll
		-- Produktionshalle (grün)			
			screens['Produktionshalle']['Sc1Header' .. index2].background = brushes.mediumseagreen
			screens['Produktionshalle']['Sc1Header' .. index2 .. 'b'].background = brushes.mediumseagreen
			screens['Produktionshalle']['SC1Gauge' .. index2].scalebrush = brushes.seagreen
		-- Screen Finishing Line - Lines of Departmend (grün)				
			screens['Finishing']['Line' .. index2].background = brushes.mediumseagreen
			screens['Finishing']['Line' .. index2].zindex = 1
			screens['Finishing']['SC1Gauge' .. index2].trailbrush = brushes.mediumseagreen
		end
		data.Screen1[index2].Durchlauf = data.Screen1[index2].Durchlauf + 1	
	end
end

--Kleinteilkommisionierung
for index = 0, data.Screen8.count-1 do
	if data.Screen8[index].Heute == 0 then 
		data.Screen8[index].Heute = math.random(570, 2786)
		data.Screen8[index].Erledigt = math.random(1,725)
	end 
	
	if data.Screen8[index].Erledigt >= data.Screen8[index].Heute - 5 then 
		data.Screen8[index].Erledigt = 0
		data.Screen8[index].Offen = 0
		data.Screen8[index].Heute = 0
	end 
	
	data.Screen8[index].Erledigt = data.Screen8[index].Erledigt + math.random(2,5)
	data.Screen8[index].Offen = data.Screen8[index].Heute - data.Screen8[index].Erledigt
end