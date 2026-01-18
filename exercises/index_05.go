package gross

func Units() map[string]int {
	return map[string]int{
		"quarter_of_a_dozen": 3,
		"half_of_a_dozen":    6,
		"dozen":              12,
		"small_gross":        120,
		"gross":              144,
		"great_gross":        1728,
	}
}

func NewBill() map[string]int {
	return make(map[string]int)
}


func AddItem(bill, units map[string]int, item, unit string) bool {

	unitValue, exists := units[unit]
	if !exists {
		return false
	}


	bill[item] += unitValue
	return true
}


func RemoveItem(bill, units map[string]int, item, unit string) bool {
	currentQty, itemExists := bill[item]
	if !itemExists {
		return false
	}

	unitValue, unitExists := units[unit]
	if !unitExists {
		return false
	}

	newQty := currentQty - unitValue

	if newQty < 0 {
		return false 
	} else if newQty == 0 {
		delete(bill, item) 
		return true
	} else {
		bill[item] = newQty
		return true
	}
}

func GetItem(bill map[string]int, item string) (int, bool) {
	qty, exists := bill[item]
	return qty, exists
}