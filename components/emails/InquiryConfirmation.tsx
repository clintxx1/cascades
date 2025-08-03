// /emails/InquiryConfirmationEmail.tsx
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Text,
  Section,
  Heading,
  Hr,
  Tailwind,
} from "@react-email/components";
import { render } from "@react-email/render";
import { BaseEmailProps } from "../../types";

export const getInquiryHTML = async ({
  name,
  categories,
  branch,
  email,
  contact,
  message,
}: BaseEmailProps) => {
  const html = await render(
    <InquiryConfirmationEmail
      name={name}
      categories={categories}
      branch={branch}
      email={email}
      contact={contact}
      message={message}
    />
  );
  if (!html) return "";
  return html as string;
};

function InquiryConfirmationEmail({
  name,
  categories,
  branch,
  email,
  contact,
  message,
}: BaseEmailProps) {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>We have received your submission, {name}</Preview>
        <Body className="bg-white font-sans">
          <Container className="p-6">
            <Text className="text-base">Hello {name},</Text>

            <Text className="text-base">
              We have received your submission. Here are the details you have
              submitted to us:
            </Text>

            <Section className="mt-4">
              <table className="w-full text-left text-sm border-collapse">
                <tbody>
                  <tr>
                    <td className="font-bold pr-4 align-top">Categories</td>
                    <td>{categories}</td>
                  </tr>
                  <tr>
                    <td className="font-bold pr-4 align-top">Branch</td>
                    <td>{branch}</td>
                  </tr>
                  <tr>
                    <td className="font-bold pr-4 align-top">Full Name</td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <td className="font-bold pr-4 align-top">Email Address</td>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <td className="font-bold pr-4 align-top">Contact Number</td>
                    <td>{contact}</td>
                  </tr>
                  <tr>
                    <td className="font-bold pr-4 align-top">Message</td>
                    <td>{message}</td>
                  </tr>
                </tbody>
              </table>
            </Section>

            <Hr className="my-6" />

            <Text className="text-base">Regards,</Text>
            <Text className="text-base">Cascades PH</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
