function setButtonStatus(buttonIndex)
    for index1 = 0, data.Machine_Status.count-1 do		
		data.Machine_Status[index1].Active = false
		screens['Single_Seat']["Andon_Button_" .. index1].background = brushes.slategray
	end
	
	if buttonIndex == 0 then
		screens['Single_Seat']["Andon_Button_" .. buttonIndex].background = brushes.yellowgreen
		setMachineRunning('endBreak')
	else 
		screens['Single_Seat']["Andon_Button_" .. buttonIndex].background = brushes.crimson
		setMachineRunning('setBreak')
		screens['Single_Seat'].Stop.visibility = visibility.visible	
		screens['Single_Seat'].Break.visibility = visibility.visible	
	end
		data.Machine_Status[buttonIndex].Active = true
end

function resetBreak()
	screens['Single_Seat'].Break.text = 'Pause'
end
function resetStart()
	screens['Single_Seat'].Start.text = 'Start'
end

function setMachineRunning(newStatus)
	if newStatus == 'Break' then
		if data.Single_Seat_Running then
			setMachineRunning('setBreak')
		else
			setMachineRunning('endBreak')
		end
	end
	
	if newStatus == 'setBreak' then
		data.Single_Seat_Running = false
		screens['Single_Seat'].Start.text = 'Restart'
		screens['Single_Seat'].Start.visibility = visibility.visible
		screens['Single_Seat'].Break.text = 'Continue'
		screens['Single_Seat'].TimeGauge.trailbrush = brushes.crimson		
	end
	
	if newStatus == 'endBreak' then
		data.Single_Seat_Running = true
		resetBreak()
		resetStart()
		screens['Single_Seat'].Start.visibility = visibility.collapsed	
		screens['Single_Seat'].TimeGauge.trailbrush = brushes.yellowgreen
	end
	
	if newStatus == 'Start' then
		data.Single_Seat_Running = true
		data.Time[0].Current = 0
		screens['Single_Seat'].Start.visibility = visibility.collapsed		
		screens['Single_Seat'].Stop.visibility = visibility.visible	
		screens['Single_Seat'].Break.visibility = visibility.visible
		screens['Single_Seat'].Time_Needed_Value.visibility = visibility.collapsed
		screens['Single_Seat'].Time_Needed_Label.visibility = visibility.collapsed
		screens['Single_Seat'].TimeGauge.trailbrush = brushes.yellowgreen	
			
		resetBreak()
	end
	
	if newStatus == 'Stop' then
		data.Single_Seat_Running = false
		screens['Single_Seat'].Stop.visibility = visibility.collapsed
		screens['Single_Seat'].Start.visibility = visibility.visible			
		resetBreak()
		screens['Single_Seat'].Break.visibility = visibility.collapsed
		resetStart()
		
		local neededTime = data.Time[0].Current
		
		screens['Single_Seat'].Time_Needed_Value.text = neededTime .. ' seconds'
		screens['Single_Seat'].Time_Needed_Value.visibility = visibility.visible
		screens['Single_Seat'].Time_Needed_Value.animate()
		screens['Single_Seat'].Time_Needed_Label.visibility = visibility.visible
		screens['Single_Seat'].Time_Needed_Label.animate()
		data.Time[0].Current = 0
		
		data.Stocks[3].Stock = data.Stocks[3].Stock - 1
		data.Stocks[4].Stock = data.Stocks[4].Stock + 1
	end
end