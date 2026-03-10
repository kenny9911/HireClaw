import { HeroSection } from '../components/landing/HeroSection'
import { DashboardPreview } from '../components/landing/DashboardPreview'
import { OnboardingSteps } from '../components/landing/OnboardingSteps'
import { CoreFeatures } from '../components/landing/CoreFeatures'
import { RolesGrid } from '../components/landing/RolesGrid'
import { ROICalculator } from '../components/landing/ROICalculator'
import { IndustrySolutions } from '../components/landing/IndustrySolutions'
import { PricingPreview } from '../components/landing/PricingPreview'
import { SecuritySection } from '../components/landing/SecuritySection'
import { CTASection } from '../components/landing/CTASection'
import { FadeIn } from '../components/animations/FadeIn'
import { SlideUp } from '../components/animations/SlideUp'

export function Landing() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FadeIn>
        <DashboardPreview />
      </FadeIn>
      <SlideUp>
        <OnboardingSteps />
      </SlideUp>
      <SlideUp delay={0.1}>
        <CoreFeatures />
      </SlideUp>
      <FadeIn>
        <RolesGrid />
      </FadeIn>
      <SlideUp>
        <ROICalculator />
      </SlideUp>
      <FadeIn delay={0.1}>
        <IndustrySolutions />
      </FadeIn>
      <SlideUp>
        <PricingPreview />
      </SlideUp>
      <FadeIn>
        <SecuritySection />
      </FadeIn>
      <SlideUp>
        <CTASection />
      </SlideUp>
    </div>
  )
}
