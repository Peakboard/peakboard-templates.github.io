local stopIconVisibility = screens[runtime.currentscreenindex].icon_stop.visibility
local startIconVisibility = screens[runtime.currentscreenindex].icon_start.visibility

if string.tostring(stopIconVisibility) == "Visible"
then
control.toggle(screens[runtime.currentscreenindex].icon_stop)
end

if string.tostring(startIconVisibility) == "Visible"
then
control.toggle(screens[runtime.currentscreenindex].icon_start)
end

-- if data.ProdOrder[0].ActualQty >= data.ProdOrder[0].TargetQty then
-- 	data.ProdOrder[0].ActualQty = 0
-- else
-- 	data.ProdOrder[0].ActualQty = data.ProdOrder[0].ActualQty + 1
-- end 