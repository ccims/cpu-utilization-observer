import { Module } from "@nestjs/common";
import { CpuUtilizationController } from "./cpu-utilization-observer.controller";
import { CpuUtilizationService } from "./cpu-utilization.service";

@Module({
    controllers: [
        CpuUtilizationController
    ],
    providers: [
        CpuUtilizationService
    ],
    exports: [
        CpuUtilizationService
    ]
})
export class CpuUtilizationModule {
    
}