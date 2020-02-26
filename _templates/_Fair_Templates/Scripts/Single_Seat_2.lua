if data.Single_Seat_Running then
	data.Time[0].Current = data.Time[0].Current + 1
	
	if data.Time[0].Current >  data.Time[0].Target then
		screens['Single_Seat'].TimeGauge.trailbrush = brushes.orangered	
	end
	
	if data.Time[0].Current >  (data.Time[0].Target * 2) then
		data.Time[0].Current = 0
		screens['Single_Seat'].TimeGauge.trailbrush = brushes.yellowgreen		
	end
end

