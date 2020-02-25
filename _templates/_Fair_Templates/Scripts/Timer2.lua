for index = 0, data.Screen1.count-1  do
	data.Screen2[index].Ist = data.Screen1[index].Ist
	data.Screen2[index].Prozente = data.Screen1[index].Prozente
end

if data.Zeitgesetzt == false then 
	data.Zeitgesetzt = true
	data.Zeit1 = date.addminute(data.Uhrzeit.getluadate(), -30)
	data.zeit2 = date.addhour(data.Uhrzeit.getluadate(), 1)
	screens['Gate4'].SC3zeit1.text = os.date('%H:%M', data.Zeit1)
	screens['Gate4'].SC3zeit2.text = os.date('%H:%M', data.zeit2)
elseif math.tonumber(data.Uhrzeit.getluadate()) >= math.tonumber(data.zeit2) then
 data.Zeitgesetzt = false
end 

if data.Zeitgesetzt == true then
	screens['Gate4'].ProgressBar.value = data.Uhrzeit.getluadate()
end
data.CorporateNews[0].Date = data.Datum
data.CorporateNews[1].Date = data.Datum
data.CorporateNews[2].Date = os.date('%d.%m.%Y', date.addday(data.Datum.getluadate(), -1))
data.CorporateNews[3].Date = os.date('%d.%m.%Y', date.addday(data.Datum.getluadate(), -2))
data.CorporateNews[4].Date = os.date('%d.%m.%Y', date.addday(data.Datum.getluadate(), -2))
screens['Finishing'].Audit.text = '(' .. os.date('%b %Y', date.addday(data.Datum.getluadate(), -20)) .. ')'


	data.KV_H1_OeeValues[0].Value = math.random(85.4, 94.7)/100
	data.KV_H1_OeeValues[1].Value = math.random(90, 98)/100
	data.KV_H1_OeeValues[2].Value = math.random(88, 99)/100
	screens['KV_H1'].SC2OEE.text = data.KV_H1_OeeValues[0].Value * data.KV_H1_OeeValues[1].Value * data.KV_H1_OeeValues[2].Value
	
	local diagramOk = math.random(1, 6)
	local diagramBad = math.random(1, 3)
	local diagramGood = 100 - diagramOk - diagramBad
	
--	Old stuff?
--	data.Screen2_List2[0].Soll = diagramGood
--	data.Screen2_List2[1].Soll = diagramOk
--	data.Screen2_List2[2].Soll = diagramBad	