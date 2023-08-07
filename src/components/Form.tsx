"use client";

import { ArrowForwardIcon, PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Center,
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  Flex,
  WrapItem,
  Box,
  InputGroup,
  Input,
  Button,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import { SetStateAction, useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [emailAddressError, setEmailAddressError] = useState(false);

  const isLettersNames = (text: string) => /^[A-Za-z]+$/.test(text);

  const isEmailValid = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (phoneNumber: string) => {
    const phoneNumberRegex = /^\d{11}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const handleFirstNameChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    if (isLettersNames(value) || value === "") setFirstName(value);
  };

  const handleLastNameChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    if (isLettersNames(value) || value === "") setLastName(value);
  };

  const handleEmailAddressChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setEmailAddress(value);
    setEmailAddressError(!isEmailValid(value));
  };

  const handlePhoneNumberChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setPhoneNumber(value);
  };

  const handleMessageChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setMessage(e.target.value);
  };

  const toast = useToast();

  const isFirstNameError = firstName === "";
  const isLastNameError = lastName === "";
  const isEmailAddressError = emailAddress === "" || emailAddressError;
  const isPhoneNumberError = phoneNumber === "" || !isPhoneNumberValid(phoneNumber);
  const isMessageError = message === "" || message.length < 10;

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const data = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      message: message,
    };

    const isEmailFormatValid = isEmailValid(emailAddress);

    if (
      isFirstNameError ||
      isLastNameError ||
      isEmailAddressError ||
      !isEmailFormatValid ||
      isPhoneNumberError ||
      isMessageError
    )
      return;

    console.log("Form submitted successfully!");
    toast({
      title: 'Message Received',
      description: "Please see the console for more details.",
      status: 'success',
      duration: 3500,
      isClosable: true,
    })
    console.log(data);
  };


  return (
    <>
      <Box pb={10}>
        <WrapItem justifyContent="center" alignItems="center" padding="20px">
          <Center>
            <Flex
              as="form"
              p="8"
              bg="#fff"
              w="100%"
              maxW="650"
              outline="solid #eee 1px"
              rounded="md"
              align={{ base: "stretch", md: "center" }}
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Flex>
                <FormControl
                  isRequired
                  isInvalid={isFirstNameError}
                  flex="1"
                  mr="4"
                >
                  <FormLabel color={"#000"}>First Name</FormLabel>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    placeholder="First name"
                    focusBorderColor="#E186E9"
                  />
                  {!isFirstNameError ? (
                    <FormHelperText></FormHelperText>
                  ) : (
                    <FormHelperText color="red">
                      First name is required.
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={isLastNameError}
                  flex="1"
                  ml="6"
                >
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={handleLastNameChange}
                    placeholder="Last name"
                    focusBorderColor="#E186E9"
                  />
                  {!isLastNameError ? (
                    <FormHelperText></FormHelperText>
                  ) : (
                    <FormHelperText color="red">
                      Last name is required.
                    </FormHelperText>
                  )}
                </FormControl>
              </Flex>
              <FormControl
                isRequired
                isInvalid={isEmailAddressError}
                w="100%"
                mt="6"
              >
                <FormLabel>Email Address</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <EmailIcon color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="email"
                    value={emailAddress}
                    onChange={handleEmailAddressChange}
                    placeholder="Email address"
                    focusBorderColor="#eaadf0"
                  />
                </InputGroup>
                {isEmailAddressError ? (
                  <FormHelperText color="red">
                    {emailAddress === ""
                      ? "Email address is required."
                      : "Invalid email address format."}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <FormControl
                isRequired
                isInvalid={isPhoneNumberError}
                w="100%"
                mt="4"
              >
                <FormLabel>Phone Number</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <PhoneIcon color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="number"
                    value={phoneNumber}
                    min={1}
                    maxLength={11}
                    onChange={handlePhoneNumberChange}
                    placeholder="Phone number"
                    focusBorderColor="#eaadf0"
                  />
                </InputGroup>
                {isPhoneNumberError ? (
          <FormHelperText color="red">
            {phoneNumber === ""
              ? "Phone number is required."
              : "Invalid phone number format (11 digits)."}
          </FormHelperText>
        ) : null}
              </FormControl>
              <FormControl
                isRequired
                isInvalid={isMessageError}
                w="100%"
                mt="4"
              >
                <FormLabel>Message</FormLabel>
                <Textarea
                  rows={4}
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Start your message"
                  focusBorderColor="#eaadf0"
                  minLength={10}
                />
                {!isMessageError ? (
                  <FormHelperText></FormHelperText>
                ) : (
                  <FormHelperText color="red">
                    Your message needs to be atleast 10 characters long.
                  </FormHelperText>
                )}
              </FormControl>
              <Button
                display="block"
                onClick={handleSubmit}
                rightIcon={<ArrowForwardIcon />}
                type="submit"
                mt="4"
                alignSelf="flex-start"
                width="100%"
                height="48px"
                background="#000"
                color="#fff"
                border="2px"
                borderColor="#eee"
                _hover={{
                  bg: "#fff",
                  color: "#000",
                  transfrom: "scale(0.98)",
                  border: "2px",
                  borderColor: "#000",
                }}
              >
                Submit
              </Button>
            </Flex>
          </Center>
        </WrapItem>
      </Box>
    </>
  );
};

export default Form;
