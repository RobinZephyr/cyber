type EventType = {
  title: string;
  date: string;
  days: number;
  benefits: string[];
  oldPrice: number;
  newPrice: number;
};

export const events: EventType[] = [
  {
    title: "Cybersecurity Awareness",
    date: "NOVEMBER 14",
    days: 1,
    benefits: [
      " Understand the core principles of cybersecurity.",
      "Identify and assess common cyber threats.",
      "Learn proactive measures to prevent attacks.",
      "Recognize individual roles in maintaining security.",
      "Understand the importance of incident reporting.",
      "Respond effectively to security incidents.",
      "Promote a cybersecurity culture within your organization.",
      "Develop strategies to protect critical assets.",
      "Stay updated with evolving cybersecurity threats.",
      "Foster continuous training and awareness initiatives.",
    ],
    oldPrice: 100,
    newPrice: 50,
  },
  {
    title: "Certified digital forensic & incident responder",
    date: "November 21-23",
    days: 3,
    benefits: [
      "Understand the fundamentals of digital forensics and incident response.",
      "Identify and analyze different types of digital evidence.",
      "Learn to use forensic tools for acquiring and analyzing data.",
      "Master advanced forensic analysis techniques.",
      "Apply incident response methodologies in real-world scenarios.",
      "Develop strategies for containment and eradication of threats.",
      "Coordinate effective incident response across teams.",
      "Improve skills in documenting and reporting forensic findings.",
      "Communicate technical information to non-technical audiences.",
      "Validate your expertise with a recognized certification.",
    ],
    oldPrice: 900,
    newPrice: 700,
  },
  {
    title: "Certified pentester - VAPT",
    date: "November 14-16",
    days: 3,
    benefits: [
      "Gain real-world insights into the daily activities of an ethical hacker.",
      "Understand the concepts and importance of Vulnerability Assessment and Penetration Testing (VAPT).",
      "Master foundational networking, Linux, and web application knowledge.",
      "Learn critical planning and scoping techniques for VAPT engagements.",
      "Understand the structured phases of VAPT, from reconnaissance to reporting.",
      "Discover advanced information gathering and OSINT techniques.",
      "Identify and assess vulnerabilities using automated and manual methods.",
      "Explore common attack vectors and ethical hacking exploitation techniques.",
      "Get hands-on experience with popular pentesting tools like Nmap, Burp Suite, and Metasploit.",
      "Learn effective reporting and communication of findings to stakeholders.",
    ],
    oldPrice: 950,
    newPrice: 700,
  },
  {
    title: "Table-top exercise Technical",
    date: "November 28",
    days: 1,
    benefits: [
      "Gain a deep understanding of your organization’s workflow and cyber threat landscape.",
      "Identify key cybersecurity concerns specific to your operations.",
      "Conduct realistic scenario-based exercises with industry-experienced facilitators.",
      "Simulate real-world cyber incidents to test your organization’s preparedness.",
      "Engage key stakeholders in decision-making processes during simulated attacks.",
      "Evaluate the effectiveness of current cybersecurity plans, tools, and processes.",
      "Receive expert feedback on your incident response actions.",
      "Improve coordination and communication among your incident response teams.",
      "Get a detailed After-Action Report outlining key observations and recommendations.",
      "Enhance your organization’s readiness for real-world cyber threats.",
    ],
    oldPrice: 5000,
    newPrice: 4100,
  },
];
