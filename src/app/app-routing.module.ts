import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularPipeComponent } from './components/angular-pipe/angular-pipe.component';
import { AnonymousFunctionComponent } from './components/anonymous-function/anonymous-function.component';
import { ArchitecturesComponent } from './components/architectures/architectures.component';
import { ChangeDetectionStrategyComponent } from './components/change-detection-strategy/change-detection-strategy.component';
import { ConstVsLetComponent } from './components/const-vs-let/const-vs-let.component';
import { CssBoxModelComponent } from './components/css-box-model/css-box-model.component';
import { CssPreprocessorsComponent } from './components/css-preprocessors/css-preprocessors.component';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';
import { DesignPatternsComponent } from './components/design-patterns/design-patterns.component';
import { DirectiveVsComponentComponent } from './components/directive-vs-component/directive-vs-component.component';
import { EcmascriptComponent } from './components/ecmascript/ecmascript.component';
import { EncapsulationComponent } from './components/encapsulation/encapsulation.component';
import { FlexComponent } from './components/flex/flex.component';
import { GenericTypesComponent } from './components/generic-types/generic-types.component';
import { GetPostPutPatchDeleteComponent } from './components/get-post-put-patch-delete/get-post-put-patch-delete.component';
import { HigherOrderFunctionComponent } from './components/higher-order-function/higher-order-function.component';
import { HttpCodesComponent } from './components/http-codes/http-codes.component';
import { InlineFunctionComponent } from './components/inline-function/inline-function.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { MutableVsImmutableComponent } from './components/mutable-vs-immutable/mutable-vs-immutable.component';
import { MvcMvvmComponent } from './components/mvc-mvvm/mvc-mvvm.component';
import { PureFunctionComponent } from './components/pure-function/pure-function.component';
import { PurePipeComponent } from './components/pure-pipe/pure-pipe.component';
import { PwaComponent } from './components/pwa/pwa.component';
import { RemVsEmComponent } from './components/rem-vs-em/rem-vs-em.component';
import { RequestResponseComponent } from './components/request-response/request-response.component';
import { RwdComponent } from './components/rwd/rwd.component';
import { ScssMixinsComponent } from './components/scss-mixins/scss-mixins.component';
import { ScssVsCssComponent } from './components/scss-vs-css/scss-vs-css.component';
import { SeoComponent } from './components/seo/seo.component';
import { SetComponent } from './components/set/set.component';
import { ShadowDomComponent } from './components/shadow-dom/shadow-dom.component';
import { SsrSsgComponent } from './components/ssr-ssg/ssr-ssg.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { TypescriptVsJavascriptComponent } from './components/typescript-vs-javascript/typescript-vs-javascript.component';
import { UtilityTypesTypescriptComponent } from './components/utility-types-typescript/utility-types-typescript.component';
import { WebComponentsComponent } from './components/web-components/web-components.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { component: LifeCycleHooksComponent, path: 'life-cycle-hooks' },
      { component: TwoWayDataBindingComponent, path: 'two-way-data-binding' },
      { component: ChangeDetectionStrategyComponent, path: 'change-detection-strategy' },
      { component: EncapsulationComponent, path: 'encapsulation' },
      { component: DirectiveVsComponentComponent, path: 'directive-vs-component' },
      { component: AngularPipeComponent, path: 'angular-pipe' },
      { component: PurePipeComponent, path: 'pure-pipe' },
      { component: DependencyInjectionComponent, path: 'dependency-injection' },
      { component: SsrSsgComponent, path: 'ssr-ssg' },
      { component: PwaComponent, path: 'pwa' },
      { component: WebComponentsComponent, path: 'web-components' },
      { component: ShadowDomComponent, path: 'shadow-dom' },
      { component: SeoComponent, path: 'seo' },
      { component: TypescriptVsJavascriptComponent, path: 'typescript-vs-javascript' },
      { component: EcmascriptComponent, path: 'ecmascript' },
      { component: ConstVsLetComponent, path: 'const-vs-let' },
      { component: MutableVsImmutableComponent, path: 'mutable-vs-immutable' },
      { component: PureFunctionComponent, path: 'pure-function' },
      { component: HigherOrderFunctionComponent, path: 'higher-order-function' },
      { component: AnonymousFunctionComponent, path: 'anonymous-function' },
      { component: InlineFunctionComponent, path: 'inline-function' },
      { component: SetComponent, path: 'set' },
      { component: GenericTypesComponent, path: 'generic-types' },
      { component: UtilityTypesTypescriptComponent, path: 'utility-types-typescript' },
      { component: RwdComponent, path: 'rwd' },
      { component: RemVsEmComponent, path: 'rem-vs-em' },
      { component: CssBoxModelComponent, path: 'css-box-model' },
      { component: FlexComponent, path: 'flex' },
      { component: CssPreprocessorsComponent, path: 'css-preprocessors' },
      { component: ScssVsCssComponent, path: 'scss-vs-css' },
      { component: ScssMixinsComponent, path: 'scss-mixins' },
      { component: DesignPatternsComponent, path: 'design-patterns' },
      { component: MvcMvvmComponent, path: 'mvc-mvvm' },
      { component: ArchitecturesComponent, path: 'architectures' },
      { component: GetPostPutPatchDeleteComponent, path: 'get-post-put-patch-delete' },
      { component: HttpCodesComponent, path: '200-201-202-400-403-404-500' },
      { component: RequestResponseComponent, path: 'request-response' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
