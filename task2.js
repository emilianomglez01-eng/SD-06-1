function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  const subject = process.argv[2];
  const message = process.argv[3];
  const mail1 = new Mail(subject, message);

  const subject2 = process.argv[3]
  const message2 = process.argv[4]
  const mail2 = new Mail(subject2, message2);

  // Type your code above this line!
  
  console.log("===opcion 1 (indices 2 y 3)===");
  console.log(Mail.subject + ": " + Mail.message)
  console.log("===opcion 2 (indices 3 y 4===");
  console.log(mail2.subject + ": " + mail2.message)
  
  
  
