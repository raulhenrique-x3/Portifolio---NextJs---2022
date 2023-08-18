import { NextPage } from "next";
import styles from "../section05/section05.module.scss";
import useLanguage from "../../hooks/useLanguage";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiLogoReact } from "react-icons/bi";

interface IInputs {
  nome: string;
  email: string;
  assunto: string;
}

const FifthSect: NextPage = () => {
  const { language } = useLanguage();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IInputs>();

  const onSubmit: SubmitHandler<IInputs> = (data) => {
    try {
      const { nome, email, assunto } = data;
      const whatsappLink = `https://api.whatsapp.com/send?phone=5581986838081&text=Ol%C3%A1%2C%20meu%20nome%20%C3%A9%20${nome}%2C%20meu%20email%20%C3%A9%20${email}%20e%20meu%20assunto%20%C3%A9%20${assunto}`;
      window.open(whatsappLink, "_blank");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={styles.fourthSect} id="contacts">
      <div className={styles.fourthSectStyle}>
        <span className={styles.sectFifthTitle}>
          <BiLogoReact className={styles.reactLogo} />
          <h2 className={styles.sectionTitle}>CONTATOS</h2>
        </span>{" "}
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <span>
              <input
                type="text"
                placeholder="Nome"
                {...register("nome", { required: true })}
              />
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </span>

            <textarea
              placeholder="Assunto"
              {...register("assunto", { required: true })}
            ></textarea>
            <input type="submit" className={styles.inputSubmit} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default FifthSect;
