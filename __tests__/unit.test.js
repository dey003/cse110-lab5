// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Testing isPhoneNumber()
test('checks that \"(123)-456-7890\" is a valid phone number', () => {
  expect(isPhoneNumber("(123)-456-7890")).toBe(true);
});

test('checks that \"(123) 456-7890\" is a valid phone number', () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('checks that \"1234567890\" is not a valid phone number', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

test('checks that \"1234-56-7890\" is not a valid phone number', () => {
  expect(isPhoneNumber("1234-56-7890")).toBe(false);
});

// Testing isEmail()
test('checks that \"bobsmith@mail.com\" is a valid email', () => {
  expect(isEmail("bobsmith@mail.com")).toBe(true);
});

test('checks that \"alice_williams3@mail.me\" is a valid email', () => {
  expect(isEmail("alice_williams3@mail.me")).toBe(true);
});

test('checks that \"bobsmith@mail.c\" is not a valid email', () => {
  expect(isEmail("bobsmith@mail.c")).toBe(false);
});

test('checks that \"alice_williams3@3.me\" is not a valid email', () => {
  expect(isEmail("alice_williams3@3.me")).toBe(false);
});

// Testing isStrongPassword()
test('checks that \"a1b2c_3d\" is a strong password', () => {
  expect(isStrongPassword("a1b2c_3d")).toBe(true);
});

test('checks that \"a123bcd\" is a strong password', () => {
  expect(isStrongPassword("a123bcd")).toBe(true);
});

test('checks that \"123456\" is not a strong password', () => {
  expect(isStrongPassword("123456")).toBe(false);
});

test('checks that \"a12\" is not a strong password', () => {
  expect(isStrongPassword("a12")).toBe(false);
});

// Testing isDate()
test('checks that \"1/1/2000\" is a valid date', () => {
  expect(isDate("1/1/2000")).toBe(true);
});

test('checks that \"10/20/1900\" is a valid date', () => {
  expect(isDate("10/20/1900")).toBe(true);
});

test('checks that \"100/1/2000\" is not a valid date', () => {
  expect(isDate("100/1/2000")).toBe(false);
});

test('checks that \"/1/2000\" is not a valid date', () => {
  expect(isDate("/1/2000")).toBe(false);
});

// Testing isHexColor
test('checks that \"F00\" is a valid hex color', () => {
  expect(isHexColor("F00")).toBe(true);
});

test('checks that \"#ff0000\" is a valid hex color', () => {
  expect(isHexColor("#ff0000")).toBe(true);
});

test('checks that \"#GGG\" is not a valid hex color', () => {
  expect(isHexColor("#GGG")).toBe(false);
});

test('checks that \"#ff00000\" is not a valid hex color', () => {
  expect(isHexColor("#ff00000")).toBe(false);
});