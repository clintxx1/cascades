import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Tailwind,
} from "@react-email/components";
import { render } from "@react-email/render";
import { ContactFormEmailProps } from "../../types";

export const getContactFormHTML = async (data: ContactFormEmailProps) => {
  const html = await render(<ContactFormEmail {...data} />);
  if (!html) return "";
  return html as string;
};

const ContactFormEmail = ({
  categories,
  branch,
  name,
  email,
  contact,
  message,
  url,
  entry_id,
  date,
  time,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>New Contact Form Submission - {name}</Preview>
        <Body className="bg-white font-sans">
          <Container className="p-6 max-w-2xl mx-auto">
            <Section>
              <Text className="text-lg font-semibold text-gray-800 mb-4">
                New Contact Form Submission
              </Text>

              <Text className="text-base text-gray-600 mb-6">
                You have received a new form submission from{" "}
                <strong>{name}</strong>. Here are the details:
              </Text>

              <Hr className="my-6" />

              <Section className="bg-gray-50 p-4 rounded-lg">
                <table className="w-full text-left text-sm">
                  <tbody className="space-y-2">
                    <tr>
                      <td className="font-semibold text-gray-700 pr-4 align-top w-1/3">
                        Categories
                      </td>
                      <td className="text-gray-800">{categories}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-gray-700 pr-4 align-top w-1/3">
                        Branch
                      </td>
                      <td className="text-gray-800">{branch}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-gray-700 pr-4 align-top w-1/3">
                        Full Name
                      </td>
                      <td className="text-gray-800">{name}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-gray-700 pr-4 align-top w-1/3">
                        Email Address
                      </td>
                      <td className="text-gray-800">
                        <a
                          href={`mailto:${email}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {email}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-gray-700 pr-4 align-top w-1/3">
                        Contact Number
                      </td>
                      <td className="text-gray-800">{contact}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-gray-700 pr-4 align-top w-1/3">
                        Message
                      </td>
                      <td className="text-gray-800 whitespace-pre-wrap">
                        {message}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Section>

              <Hr className="my-6" />

              <Section className="text-xs text-gray-500 space-y-1">
                <Text>
                  📄 Page:{" "}
                  <a href={url} className="text-blue-600 hover:text-blue-800">
                    {url}
                  </a>
                </Text>
                <Text>🆔 Entry ID: #{entry_id}</Text>
                <Text>📅 Date: {date}</Text>
                <Text>⏰ Time: {time}</Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
