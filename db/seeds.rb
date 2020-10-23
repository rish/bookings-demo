Space.create!([
  {name: "Space 1", building_id: 1},
  {name: "Space 2", building_id: 1},
  {name: "Space 3", building_id: 1},
  {name: "Space 4", building_id: 1},
  {name: "Space 5", building_id: 1}
])
Building.create!([
  {name: "Building 1"}
])
Booking.create!([
  {name: "test 1", description: "just running a test", start_date: "2020-10-23", end_date: "2020-10-24", space_id: 5},
  {name: "Test 2", description: "Another test", start_date: "2020-10-23", end_date: "2020-10-24", space_id: 5}
])
