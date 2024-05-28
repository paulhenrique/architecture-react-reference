import { createServer } from "miragejs";
import chargeStationData from "./chargeStationData.json";
import { ChargeStationResponse } from "types/ChargeStationResponse";
import chargePoints from "./chargePoints.json";
import { ChargePointDaum } from "types/ChargePointDaum";
import { ChargePointResponse } from "types/ChargePointResponse";
import SettingsStation from "./settingsStations.json";

const settingsStation = SettingsStation.settingsStations;

const Pagination = {
  totalPages: 1,
  totalElements: 4,
  pageNo: 0,
  pageSize: 4,
};

const getStatesFromJson = (
  data: ChargeStationResponse
): ChargeStationResponse["chargeStationData"][number]["address"]["state"][] => {
  const states: ChargeStationResponse["chargeStationData"][number]["address"]["state"][] =
    [];

  data.chargeStationData.forEach((station) => {
    if (!states.find((uf) => uf.code === station.address.state.code)) {
      states.push(station.address.state);
    }
  });

  return states;
};
settingsStation;

const getGetChargePointsByChargeStationIdentification = (
  chargePoints: ChargePointDaum[],
  chargeStationIdentification: string
) => {
  return chargePoints.filter(
    (chargePoint) =>
      chargePoint.chargeStation.identification === chargeStationIdentification
  );
};

export const createServerCall = (environment = "development") =>
  createServer({
    environment,
    routes() {
      this.passthrough("/keycloak.json");
      this.passthrough("http://localhost:7006/**");

      this.namespace = "api";

      this.get("/stations", () => {
        return chargeStationData as ChargeStationResponse;
      });

      this.get("/states", () => getStatesFromJson(chargeStationData));

      this.post("/settingsStations", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        // adiciona o data no settingsStation
        settingsStation.push(data);

        // retorna a lista de settingsStation
        return settingsStation;
      });

      this.delete("/settingsStations", (schema, request) => {
        const data = JSON.parse(request.requestBody);

        // remove o data no settingsStation
        settingsStation.splice(settingsStation.indexOf(data), 1);

        // retorna a lista de settingsStation
        return settingsStation;
      });

      this.get("/settingsStations", (schema, request) => {
        const data = request.queryParams;
        if (data?.selectedStation) {
          const filteredStations = settingsStation.filter(
            (station) => station.rechargeStation === data.selectedStation
          );
          console.log("🚀 ~ this.get ~ filteredStations:", filteredStations);
          return filteredStations;
        }
        return settingsStation;
      });

      this.post("/chargePoints", (schema, request) => {
        const data = JSON.parse(request.requestBody);

        const chargePointsTyped =
          chargePoints.chargePointData as ChargePointDaum[];

        return {
          chargePointData: getGetChargePointsByChargeStationIdentification(
            chargePointsTyped,
            data.chargeStationId
          ),
          pagination: Pagination,
        } as ChargePointResponse;
      });
    },
  });

createServerCall();
