# Ads3 Exchange SDK - TonAdBanner Component Documentation

## 📋 Introduction

TonAdBanner is a next-generation advertising banner component built by **Ads3**, the premier decentralized advertising network for multi-chain ecosystems. Designed with cutting-edge technology to support multiple blockchain networks including BNB Chain (BSC) and opBNB, Ads3 delivers seamless cross-chain advertising experiences with advanced features like multiple sizes, dark mode, and intelligent container management.

**About Ads3**: Ads3 is revolutionizing digital advertising through blockchain technology, providing transparent, efficient, and user-centric advertising solutions across multiple blockchain networks. Originally built on and deeply integrated with the **TON (The Open Network)** ecosystem, Ads3 has now expanded to support multi-chain environments including BNB Chain and opBNB. Our platform leverages TON's high-performance blockchain architecture as a foundation while extending compatibility to other major networks, empowering advertisers and publishers with decentralized ad serving, real-time analytics, and seamless cross-chain advertising experiences.

## 🌐 Supported Networks

- **TON Network**: Native TON blockchain support - our foundational network
- **BNB Chain (BSC)**: Full BEP-20 token support and BSC ecosystem integration
- **opBNB**: Optimized BNB Chain layer-2 solution for lower costs and faster transactions

## 🚀 Installation

```bash
npm install ton-exchange-sdk
# or
yarn add ton-exchange-sdk
```

## 📦 Import

```tsx
import { TonAdBanner } from 'ton-exchange-sdk'
import 'ton-exchange-sdk/dist/index.css'
```

## 🎯 Basic Usage

### Simplest Usage

```tsx
<div style={{ width: 500, height: 150 }}>
  <TonAdBanner blockId="your-block-id" />
</div>
```

### Complete Usage Example

```tsx
import React, { useState } from 'react'
import { TonAdBanner } from 'ton-exchange-sdk'
import 'ton-exchange-sdk/dist/index.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div>
      {/* Standard ad placement */}
      <div id="main-ad" style={{ width: 500, height: 150 }}>
        <TonAdBanner
          blockId="your-block-id"
          darkMode={darkMode}
          containerId="main-ad"
          onClick={(ad) => {
            console.log('ad clicked:', ad)
          }}
          onVerifySuccess={(options) => {
            console.log('ad verify successful:', options)
          }}
        />
      </div>
    </div>
  )
}
```

## 🔧 Props Reference

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `blockId` | `string` | ✅ | - | Ad block ID for fetching corresponding ad content |
| `onClick` | `(ad: TonAdProps) => void` | ❌ | - | Ad click callback function |
| `onVerifySuccess` | `(options: OnAdVerifyOptions) => void` | ❌ | - | Ad verification success callback |
| `style` | `React.CSSProperties` | ❌ | - | Custom styles |
| `darkMode` | `boolean` | ❌ | `false` | Enable dark mode |
| `containerId` | `string` | ❌ | - | Container element ID, automatically hides container when no ads |

## 🎨 Theme Modes

### Light Mode (Default)
```tsx
<TonAdBanner blockId="your-block-id" />
```

### Dark Mode
```tsx
<TonAdBanner blockId="your-block-id" darkMode={true} />
```

### Dynamic Theme Switching
```tsx
const [isDark, setIsDark] = useState(false)

<TonAdBanner blockId="your-block-id" darkMode={isDark} />
```

## 📱 Recommended Sizes

### Standard Size (500x150)
Suitable for desktop and tablet devices
```tsx
<div style={{ width: 500, height: 150 }}>
  <TonAdBanner blockId="your-block-id" />
</div>
```

### Wide Screen Size (600x120)
Suitable for wide screen layouts
```tsx
<div style={{ width: 600, height: 120 }}>
  <TonAdBanner blockId="your-block-id" />
</div>
```

### Compact Size (400x100)
Suitable for sidebars or content areas
```tsx
<div style={{ width: 400, height: 100 }}>
  <TonAdBanner blockId="your-block-id" />
</div>
```

### Mobile Size (320x80)
Suitable for mobile devices
```tsx
<div style={{ width: 320, height: 80 }}>
  <TonAdBanner blockId="your-block-id" />
</div>
```

## 🎯 Smart Container Management

Using the `containerId` parameter enables smart container management: when no ads are available, the specified container will be automatically hidden to avoid taking up page space.

```tsx
<!-- HTML Container -->
<div id="ad-section" style={{ width: 500, height: 150, border: '1px solid #ddd' }}>
  <TonAdBanner
    blockId="your-block-id"
    containerId="ad-section"
  />
</div>
```

**Effect Description:**
- ✅ **With Ads**: Container displays normally with ad content rendered inside
- ❌ **No Ads**: Entire container is hidden (`display: none`)
- ❌ **Fetch Failed**: Container is also automatically hidden

## 📝 Event Handling

### Click Events
```tsx
<TonAdBanner
  blockId="your-block-id"
  onClick={(ad) => {
    console.log('Ad info:', ad.text)
    console.log('Ad ID:', ad.adId)
    console.log('Ad image:', ad.image)
    // Custom click logic
  }}
/>
```

### Verification Success Callback
```tsx
<TonAdBanner
  blockId="your-block-id"
  onVerifySuccess={(options) => {
    console.log('Verification successful:', options)
    // Handle post-verification logic
  }}
/>
```

## 🎨 Custom Styling

### Via style Property
```tsx
<TonAdBanner
  blockId="your-block-id"
  style={{
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  }}
/>
```

### Via CSS Class Override
```css
/* Custom ad container styles */
.ton-ad-banner-container {
  border-radius: 20px !important;
}

/* Custom button styles */
.ton-ad-go-button {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4) !important;
}
```

## 📱 Responsive Design

The component includes built-in responsive design that automatically adjusts based on container size:

- **> 120px height**: Standard layout
- **< 120px height**: Compact layout with reduced padding
- **< 100px height**: Ultra-compact layout with single-line titles
- **< 90px height**: Minimal layout with all elements minimized

## 🔄 Initialization Configuration

Before using the component, initialize the SDK first:

```tsx
import { TonAdInit } from 'ton-exchange-sdk'

// Call during app startup
TonAdInit({
  appKey: 'your-app-key',
  baseUrl: 'https://api.example.com',
  // Multi-chain configuration
  supportedChains: ['TON', 'BSC', 'opBNB'], // Specify supported chains
  defaultChain: 'TON' // Default chain
})
```

## 🌐 Multi-Chain Configuration

### BNB Chain (BSC) Setup
```tsx
TonAdInit({
  appKey: 'your-app-key',
  baseUrl: 'https://api.example.com',
  chainConfig: {
    BSC: {
      rpcUrl: 'https://bsc-dataseed.binance.org/',
      chainId: 56,
      contractAddress: '0x...' // Your BSC contract address
    }
  }
})
```

### opBNB Chain Setup
```tsx
TonAdInit({
  appKey: 'your-app-key',
  baseUrl: 'https://api.example.com',
  chainConfig: {
    opBNB: {
      rpcUrl: 'https://opbnb-mainnet-rpc.bnbchain.org',
      chainId: 204,
      contractAddress: '0x...' // Your opBNB contract address
    }
  }
})
```

## ⚠️ Important Notes

1. **Container Size**: Ensure clear width and height for the ad component
2. **CSS Import**: Don't forget to import the component's CSS file
3. **blockId**: Ensure using a valid ad block ID
4. **Initialization**: Call `TonAdInit` before using components
5. **Dark Mode**: Dark mode requires manual control and won't auto-detect system theme
6. **Chain Support**: Configure supported chains during initialization for multi-chain functionality

## 🎪 Complete Example

```tsx
import React, { useState, useEffect } from 'react'
import { TonAdBanner, TonAdInit } from 'ton-exchange-sdk'
import 'ton-exchange-sdk/dist/index.css'

function AdPage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Initialize SDK with multi-chain support
    TonAdInit({
      appKey: 'your-app-key',
      baseUrl: 'https://your-api-domain.com',
      supportedChains: ['TON', 'BSC', 'opBNB'],
      chainConfig: {
        BSC: {
          rpcUrl: 'https://bsc-dataseed.binance.org/',
          chainId: 56
        },
        opBNB: {
          rpcUrl: 'https://opbnb-mainnet-rpc.bnbchain.org',
          chainId: 204
        }
      }
    })
  }, [])

  return (
    <div style={{
      padding: 20,
      backgroundColor: darkMode ? '#1f2937' : '#ffffff',
      minHeight: '100vh'
    }}>
      <h1>My Ad Page</h1>

      {/* Theme Toggle */}
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
        />
        Dark Mode
      </label>

      {/* Main Ad Placement */}
      <div id="main-ad" style={{
        width: 500,
        height: 150,
        margin: '20px 0',
        border: '1px solid #ddd',
        borderRadius: 12
      }}>
        <TonAdBanner
          blockId="main-banner"
          darkMode={darkMode}
          containerId="main-ad"
          onClick={(ad) => {
            console.log('Main ad clicked:', ad)
          }}
        />
      </div>

      {/* Sidebar Ad Placement */}
      <div id="sidebar-ad" style={{
        width: 300,
        height: 100,
        border: '1px solid #ddd',
        borderRadius: 8
      }}>
        <TonAdBanner
          blockId="sidebar-banner"
          darkMode={darkMode}
          containerId="sidebar-ad"
        />
      </div>
    </div>
  )
}

export default AdPage
```

## 🛠️ Type Definitions

```typescript
interface TonAdProps {
  adId: string
  text: string
  image: string
  icon: string
  popupImage?: string
  chain?: 'TON' | 'BSC' | 'opBNB' // Chain information
  // ... other properties
}

interface OnAdVerifyOptions {
  // Verification options type definition
  chain?: string
  transactionHash?: string
}

interface ChainConfig {
  rpcUrl: string
  chainId: number
  contractAddress?: string
}
```

## 🐛 Troubleshooting

### Ads Not Displaying
1. Check if `blockId` is correct
2. Confirm `TonAdInit` has been called properly
3. Check browser console for error messages
4. Verify network connection is working
5. Ensure correct chain configuration for multi-chain setups

### Style Issues
1. Confirm CSS file has been imported
2. Check container has explicit width and height
3. Look for conflicting CSS styles

### Container Not Hiding
1. Confirm `containerId` parameter is correct
2. Check if element with corresponding ID exists
3. Review browser console log messages

### Chain Connection Issues
1. Verify RPC URLs are accessible
2. Check chain IDs match network specifications
3. Ensure contract addresses are deployed on respective chains
