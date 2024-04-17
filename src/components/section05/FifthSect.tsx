import { NextPage } from "next";
import styles from "../section05/section05.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiLogoReact } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IInputs {
  name: string;
  email: string;
  subject: string;
}

const FifthSect: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>();

  const onSubmit: SubmitHandler<IInputs> = (data) => {
    try {
      const { name, email, subject } = data;
      const whatsappLink = `https://api.whatsapp.com/send?phone=5581986838081&text=Ol%C3%A1%2C%20meu%20nome%20%C3%A9%20${name}%2C%20meu%20email%20%C3%A9%20${email}%20e%20meu%20assunto%20%C3%A9%20${subject}`;
      window.open(whatsappLink, "_blank");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={styles.fourthSect} id="contacts">
      <ToastContainer />
      <div className={styles.fourthSectStyle}>
        <span className={styles.sectFifthTitle}>
          <BiLogoReact className={styles.reactLogo} />
          <h2 className={styles.sectionTitle}>CONTACT</h2>
        </span>{" "}
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <span>
              <input
                type="text"
                placeholder="Your name"
                {...register("name", { required: true })}
              />
              <input
                type="email"
                placeholder="Your email"
                {...register("email", { required: true })}
              />
            </span>

            <textarea
              placeholder="Your subject"
              {...register("subject", { required: true })}
            ></textarea>
            <button
              type="submit"
              className={styles.inputSubmit}
              aria-label="Botão para envio do formulário de contato"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FifthSect;
