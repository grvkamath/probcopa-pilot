"""
Maximum Entropy Analysis for Bounded Integer Distributions

This script calculates the theoretical maximum entropy for a discrete distribution
over {0, 1, 2, ..., 100} given a constraint on the mean.

The maximum entropy distribution with a mean constraint follows:
p(x) ∝ exp(-λx)

where λ is chosen to satisfy the mean constraint.
"""

import numpy as np
from scipy.optimize import fsolve, minimize_scalar
from scipy.special import logsumexp
import matplotlib.pyplot as plt


def max_entropy_distribution(mean, min_val=0, max_val=100):
    """
    Find the maximum entropy discrete distribution over [min_val, max_val]
    with a given mean.
    
    Parameters:
    -----------
    mean : float
        The desired mean of the distribution
    min_val : int
        Minimum value in the support (default: 0)
    max_val : int
        Maximum value in the support (default: 100)
    
    Returns:
    --------
    probs : numpy array
        The probability distribution that maximizes entropy
    lambda_param : float
        The Lagrange multiplier used
    """
    values = np.arange(min_val, max_val + 1)
    
    # Special cases
    if mean == min_val:
        # All mass at min_val
        probs = np.zeros(len(values))
        probs[0] = 1.0
        return probs, 0.0
    elif mean == max_val:
        # All mass at max_val
        probs = np.zeros(len(values))
        probs[-1] = 1.0
        return probs, -np.inf
    
    # Define equation to solve for lambda
    def mean_constraint(lambda_param):
        """Returns the mean of the exponential distribution minus target mean"""
        if lambda_param == 0:
            # Uniform distribution
            return np.mean(values) - mean
        
        log_probs = -lambda_param * values
        log_Z = logsumexp(log_probs)
        probs = np.exp(log_probs - log_Z)
        return np.sum(values * probs) - mean
    
    # Find lambda that satisfies the mean constraint
    # If mean > midpoint, lambda should be negative
    # If mean < midpoint, lambda should be positive
    midpoint = (min_val + max_val) / 2
    initial_guess = 0.01 if mean < midpoint else -0.01
    
    lambda_param = fsolve(mean_constraint, initial_guess)[0]
    
    # Compute the distribution
    log_probs = -lambda_param * values
    log_Z = logsumexp(log_probs)
    probs = np.exp(log_probs - log_Z)
    
    return probs, lambda_param


def calculate_entropy(probs, base=2):
    """
    Calculate the entropy of a discrete probability distribution.
    
    Parameters:
    -----------
    probs : array-like
        Probability distribution
    base : float
        Base of the logarithm (default: 2 for bits)
    
    Returns:
    --------
    entropy : float
        The entropy in the specified units
    """
    # Filter out zero probabilities
    probs = np.array(probs)
    probs = probs[probs > 0]
    
    if base == 2:
        return -np.sum(probs * np.log2(probs))
    elif base == np.e:
        return -np.sum(probs * np.log(probs))
    else:
        return -np.sum(probs * np.log(probs) / np.log(base))


def get_max_entropy_for_mean(mean, min_val=0, max_val=100, base=2):
    """
    Get the maximum possible entropy for a distribution with given mean.
    
    Parameters:
    -----------
    mean : float
        The mean of the distribution
    min_val : int
        Minimum value in the support
    max_val : int
        Maximum value in the support
    base : float
        Base of the logarithm for entropy calculation
    
    Returns:
    --------
    max_entropy : float
        The maximum entropy achievable
    """
    probs, _ = max_entropy_distribution(mean, min_val, max_val)
    return calculate_entropy(probs, base=base)


def plot_max_entropy_curve(min_val=0, max_val=100, num_points=101, base=2):
    """
    Plot the maximum entropy as a function of the mean.
    
    Parameters:
    -----------
    min_val : int
        Minimum value in the support
    max_val : int
        Maximum value in the support
    num_points : int
        Number of points to sample
    base : float
        Base of the logarithm for entropy calculation
    """
    means = np.linspace(min_val, max_val, num_points)
    max_entropies = [get_max_entropy_for_mean(m, min_val, max_val, base) for m in means]
    
    plt.figure(figsize=(10, 6))
    plt.plot(means, max_entropies, linewidth=2, label='Maximum Entropy')
    plt.xlabel('Mean', fontsize=12)
    plt.ylabel(f'Maximum Entropy ({base=})', fontsize=12)
    plt.title('Maximum Possible Entropy vs. Mean\nfor Discrete Distribution on [0, 100]', fontsize=14)
    plt.grid(True, alpha=0.3)
    plt.legend()
    plt.tight_layout()
    
    return means, max_entropies


def visualize_max_entropy_distribution(mean, min_val=0, max_val=100):
    """
    Visualize the maximum entropy distribution for a given mean.
    
    Parameters:
    -----------
    mean : float
        The mean of the distribution
    min_val : int
        Minimum value in the support
    max_val : int
        Maximum value in the support
    """
    probs, lambda_param = max_entropy_distribution(mean, min_val, max_val)
    entropy = calculate_entropy(probs)
    values = np.arange(min_val, max_val + 1)
    
    plt.figure(figsize=(12, 5))
    
    # Plot distribution
    plt.subplot(1, 2, 1)
    plt.bar(values, probs, width=1.0, alpha=0.7)
    plt.xlabel('Value', fontsize=12)
    plt.ylabel('Probability', fontsize=12)
    plt.title(f'Maximum Entropy Distribution\nMean={mean:.1f}, λ={lambda_param:.4f}', fontsize=12)
    plt.grid(True, alpha=0.3, axis='y')
    
    # Plot cumulative distribution
    plt.subplot(1, 2, 2)
    cumulative = np.cumsum(probs)
    plt.plot(values, cumulative, linewidth=2)
    plt.xlabel('Value', fontsize=12)
    plt.ylabel('Cumulative Probability', fontsize=12)
    plt.title(f'Cumulative Distribution\nEntropy={entropy:.3f} bits', fontsize=12)
    plt.grid(True, alpha=0.3)
    
    plt.tight_layout()
    
    return probs, entropy


def compare_with_data(data_mean, data_entropy, min_val=0, max_val=100):
    """
    Compare actual data entropy with theoretical maximum.
    
    Parameters:
    -----------
    data_mean : float
        Mean of your data distribution
    data_entropy : float
        Entropy of your data distribution
    min_val : int
        Minimum value in the support
    max_val : int
        Maximum value in the support
    
    Returns:
    --------
    results : dict
        Dictionary with comparison results
    """
    max_entropy = get_max_entropy_for_mean(data_mean, min_val, max_val)
    efficiency = data_entropy / max_entropy if max_entropy > 0 else 0
    
    results = {
        'data_mean': data_mean,
        'data_entropy': data_entropy,
        'max_entropy': max_entropy,
        'entropy_efficiency': efficiency,
        'entropy_gap': max_entropy - data_entropy
    }
    
    print(f"Comparison Results:")
    print(f"  Mean: {data_mean:.2f}")
    print(f"  Actual Entropy: {data_entropy:.4f} bits")
    print(f"  Maximum Possible Entropy: {max_entropy:.4f} bits")
    print(f"  Entropy Efficiency: {efficiency:.2%}")
    print(f"  Entropy Gap: {max_entropy - data_entropy:.4f} bits")
    
    return results


# Example usage
if __name__ == "__main__":
    print("Maximum Entropy Analysis for Discrete Distributions")
    print("=" * 60)
    
    # Example 1: Plot the maximum entropy curve
    print("\n1. Generating maximum entropy curve...")
    means, max_entropies = plot_max_entropy_curve()
    plt.savefig('max_entropy_curve.png', dpi=300, bbox_inches='tight')
    print(f"   Saved: max_entropy_curve.png")
    print(f"   Peak entropy: {max(max_entropies):.4f} bits at mean ≈ {means[np.argmax(max_entropies)]:.1f}")
    
    # Example 2: Visualize distributions for different means
    print("\n2. Visualizing maximum entropy distributions...")
    test_means = [20, 50, 80]
    for test_mean in test_means:
        visualize_max_entropy_distribution(test_mean)
        plt.savefig(f'max_entropy_dist_mean_{test_mean}.png', dpi=300, bbox_inches='tight')
        print(f"   Saved: max_entropy_dist_mean_{test_mean}.png")
    
    # Example 3: Compare with sample data
    print("\n3. Example comparison with data:")
    example_data_mean = 65
    example_data_entropy = 4.5  # Replace with your actual entropy calculation
    results = compare_with_data(example_data_mean, example_data_entropy)
    
    print("\n" + "=" * 60)
    print("To use with your data:")
    print("  1. Calculate mean and entropy for each of your items")
    print("  2. Call: compare_with_data(your_mean, your_entropy)")
    print("  3. Or get just the max entropy: get_max_entropy_for_mean(your_mean)")
    
    plt.show()

