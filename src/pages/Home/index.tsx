import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplates } from "../../templates/MainTemplates";

type HomeProps = {
  state: TaskStateModel,
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

export function Home(props: HomeProps) {
  const { state, setState } = props;

  return (
    <MainTemplates>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplates>
  )
}
