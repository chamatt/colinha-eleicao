import { useState } from "react";
import "./App.css";
import OtpInput from "./components/OtpInput";
import createPersistedState from 'use-persisted-state';

const useDeputadoFederal = createPersistedState("deputadoFederal");
const useDeputadoEstadual = createPersistedState("deputadoEstadual");
const useSenador = createPersistedState("senador");
const useGovernador = createPersistedState("governador");
const usePresidente = createPersistedState("presidente");


function App() {
  const [deputadoFederal, setDeputadoFederal] = useDeputadoFederal("");
  const [deputadoEstadual, setDeputadoEstadual] = useDeputadoEstadual("");
  const [senador, setSenador] = useSenador("");
  const [governador, setGovernador] = useGovernador("");
  const [presidente, setPresidente] = usePresidente("");


  return (
    <div className="mt-16">
      <div className="w-full">
        <form className="mx-auto  max-w-xs">
          <div className="mb-4">
            <h3 className="mb-2">DEPUTADO FEDERAL</h3>
            <OtpInput
              valueLength={4}
              value={deputadoFederal}
              onChange={setDeputadoFederal}
            />
          </div> <div className="mb-4">
            <h3 className="mb-2">DEPUTADO ESTADUAL</h3>
            <OtpInput
              valueLength={5}
              value={deputadoEstadual}
              onChange={setDeputadoEstadual}
            /></div> <div className="mb-4">
            <h3 className="mb-2">SENADOR</h3>
            <OtpInput valueLength={3} value={senador} onChange={setSenador} />
          </div>   <div className="mb-4"> <h3 className="mb-2">GOVERNADOR</h3>
            <OtpInput
              valueLength={2}
              value={governador}
              onChange={setGovernador}
            /></div>
          <div className="mb-4"> <h3 className="mb-2">PRESIDENTE</h3>
            <OtpInput
              valueLength={2}
              value={presidente}
              onChange={setPresidente}
            /></div>

          <div className="text-center mt-8 noprint"> 
            <button className="btn w-full" type="button" onClick={() =>window.print()}>Gerar Colinha</button>
          </div>
        </form>
      </div></div>
  );
}

export default App;
