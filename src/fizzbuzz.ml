let rec range a b =
  if a > b then [] else a :: (range (a+1) b)
let fizzy_string num =
  let three = (num mod 3 = 0) in
  let five = (num mod 5 = 0) in
  if three && five then "FizzBuzz" else
    if three then "Fizz" else
      if five then "Buzz" else
        string_of_int num
let main top =
  (List.iter (fun num -> Js.log (fizzy_string num)) (range 1 top))
let () = main 100
