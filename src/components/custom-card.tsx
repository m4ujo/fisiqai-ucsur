import Link from "next/link";

import React from "react";
import { IPathnameInfo } from "@/interfaces/interfaces";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormulasIcon from "./icons/formulas-icon";
import PreguntasIcon from "./icons/preguntas-icon";
import GuiaResolucionIcon from "./icons/guia-resolucion-icon";

export default function CustomCard({ routeProps }: { routeProps: IPathnameInfo }) {
  return (
    <Link href={routeProps.url}>
      <Card className="py-3 h-full hover:bg-card-hover max-w-md">
        <CardHeader>
          <CardTitle className="flex items-start gap-3 font-bold">
            {routeProps.url === "formulas" ? (
              <FormulasIcon />
            ) : routeProps.url === "preguntas" ? (
              <PreguntasIcon />
            ) : routeProps.url === "guia-resolucion" ? (
              <GuiaResolucionIcon />
            ) : null}

            {routeProps.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{routeProps.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
