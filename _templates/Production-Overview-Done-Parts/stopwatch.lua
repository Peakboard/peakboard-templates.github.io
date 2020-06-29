local start = 0
 
function Start()
	start = os.time()
end
 
function Stop()
	start = 0
end
 
function PrintTime()
	if( start == 0 ) then
		print( string.format(  start, "%02i:%02i:%02i" ) )
	else
	        print( string.format(  os.time() - start, "%02i:%02i:%02i" ) )
	end
end

Start()
PrintTime()