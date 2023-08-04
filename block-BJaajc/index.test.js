const {getFullName ,isPalindrome, getCircumference,getArea} =require('./index')

// getFullName
// positive test

test('getFullName Himanshu + Rajpoot match to Himanshu Rajpoot' ,()=>{
    expect(getFullName('Himanshu' , 'Rajpoot')).toMatch('Himanshu Rajpoot')
})

test('getFullName Rahul + Rajpoot match to Rahul Rajpoot' ,()=>{
    expect(getFullName('Rahul' , 'Rajpoot')).toMatch('Rahul Rajpoot')
})

test('getFullName Ragni + Rajpoot match to Ragni Rajpoot' ,()=>{
    expect(getFullName('Ragni' , 'Rajpoot')).toMatch('Ragni Rajpoot')
})

// nagetive
test('getFullName Himanshu + Rajpoot not match to Himanshu Kumar' ,()=>{
    expect(getFullName('Himanshu' , 'Rajpoot')).not.toMatch('Himanshu Kumar')
})

test('getFullName Rahul + Rajpoot match not to Rahul Kumar' ,()=>{
    expect(getFullName('Rahul' , 'Rajpoot')).not.toMatch('Rahul Kumar')
})

test('getFullName Ragni + Rajpoot not match to Ragni Kumar' ,()=>{
    expect(getFullName('Ragni' , 'Rajpoot')).not.toMatch('Ragni Kumar')
})


// isPalindrome
// positive text

test('isPalindrome pap to be  true',()=>{
    expect(isPalindrome('pap')).toBeTruthy()
})

test('isPalindrome non to be  true',()=>{
    expect(isPalindrome('non')).toBeTruthy()
})

test('isPalindrome cooc to be  true',()=>{
    expect(isPalindrome('cooc')).toBeTruthy()
})

// isPalindrome
// negative text

test('isPalindrome Himanshu to be  false',()=>{
    expect(isPalindrome('Himanshu')).toBeFalsy()
})

test('isPalindrome Rahul to be  false',()=>{
    expect(isPalindrome('Rahul')).toBeFalsy()
})

test('isPalindrome Ragni to be  false',()=>{
    expect(isPalindrome('Ragni')).toBeFalsy()
})

// getCircumfrence
// positive text
test('getcircumference radius will be 1 and circumference  is equal 6',()=>{
    expect(getCircumference(1)).toBe(6)
})

test('getcircumference radius will be 10 and circumference  is equal 62',()=>{
    expect(getCircumference(10)).toBe(62)
})

test('getcircumference radius will be 100 and circumference  is equal 628',()=>{
    expect(getCircumference(100)).toBe(628)
})
// negative
test('getcircumference radius will be 4 and circumference  is not equal 62',()=>{
    expect(getCircumference(4)).not.toBe(62)
})

test('getcircumference radius will be 77 and circumference  is not equal 100',()=>{
    expect(getCircumference(77)).not.toBe(100)
})

test('getcircumference radius will be 50 and circumference  is not equal 533',()=>{
    expect(getCircumference(50)).not.toBe(533)
})
// getArea
// positive
test('getarea radius will be 1 and area is equal 3',()=>{
    expect(getArea(1)).toBe(3)
})

test('getarea radius will be 2 and area is equal 12',()=>{
    expect(getArea(2)).toBe(12)
})

test('getarea radius will be 3 and area is equal 28',()=>{
    expect(getArea(3)).toBe(28)
})


//negative
test('getarea radius will be 45 and area is not equal 84',()=>{
    expect(getArea(45)).not.toBe(84)
})

test('getarea radius will be 10 and area is not equal 100',()=>{
    expect(getArea(10)).not.toBe(100)
})

test('getarea radius will be 33 and area is not equal 120',()=>{
    expect(getArea(33)).not.toBe(120)
})
