import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import { MainTemplates } from "../../templates/MainTemplates";
import { useRef } from "react";
import { useTaskContext } from "../../components/contexts/TaskContexts/useTaskContext";

export function Settings() {
  const { state } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const LongBreakTimeInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const workTime = workTimeInput.current?.value;
    const shortBreakTime = shortBreakTimeInput.current?.value;
    const longBreakTime = LongBreakTimeInput.current?.value;

    console.log(workTime, shortBreakTime, longBreakTime)

  }


  return (
    <MainTemplates>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p style={{textAlign: 'center'}}>
          Modifique as configurações para tempo de foco, descanso curto e descanso longo.
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action='' className="form">
          <div className="formRow">
            <DefaultInput 
              id='workTime' 
              labelText='Foco' 
              ref={workTimeInput} 
              defaultValue={state.config.workTime} 
            />
          </div>
          <div className="formRow">
            <DefaultInput 
              id='shortBreakTime' 
              labelText='Descanso curto' 
              ref={shortBreakTimeInput} 
              defaultValue={state.config.shortBreakTime}  
            />
          </div>
          <div className="formRow">
            <DefaultInput 
              id='longBreakTime' 
              labelText='Descanso longo' 
              ref={LongBreakTimeInput}
              defaultValue={state.config.longBreakTime} 
              />
          </div>
          <div className="formRow">
            <DefaultButton  
              icon={<SaveIcon />} 
              aria-label='Salvar configurações'
              title='Salvar configurações'
              />
          </div>
        </form>
      </Container>
    </MainTemplates>
  )
}
